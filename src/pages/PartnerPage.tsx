import { useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { getPartnerBySlug, getJobsByPartner } from "../api";
import { useFetch } from "../hooks/useFetch";
import Skeleton, { CardSkeleton } from "../components/ui/Skeleton";
import ErrorState from "../components/ui/ErrorState";
import PartnerHeader from "../components/partner/PartnerHeader";
import JobCard from "../components/jobs/JobCard";

const PartnerPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const fetchPartner = useCallback(() => getPartnerBySlug(slug!), [slug]);

  const {
    data: partner,
    isLoading: isPartnerLoading,
    error: partnerError,
    refetch: refetchPartner,
  } = useFetch(fetchPartner);

  const fetchJobs = useCallback(
    () => (partner ? getJobsByPartner(partner.id) : Promise.resolve([])),
    [partner?.id],
  );

  const {
    data: jobs,
    isLoading: isJobsLoading,
    error: jobsError,
    refetch: refetchJobs,
  } = useFetch(fetchJobs);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Назад до всіх вакансій
        </Link>
      </div>

      {isPartnerLoading && <Skeleton className="h-48 w-full" />}
      {partnerError && <ErrorState onRetry={refetchPartner} />}
      {!isPartnerLoading && !partnerError && partner && (
        <PartnerHeader partner={partner} />
      )}

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Відкриті вакансії компанії
        </h2>

        {isJobsLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}

        {jobsError && <ErrorState onRetry={refetchJobs} />}

        {!isJobsLoading && !jobsError && jobs && (
          <div>
            {jobs.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl">
                <p className="text-slate-500 font-medium">
                  У цієї компанії наразі немає відкритих вакансій.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerPage;

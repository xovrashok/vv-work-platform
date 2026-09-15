import { useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import type { Job } from "../../types/api";
import { CardSkeleton } from "../ui/Skeleton";
import ErrorState from "../ui/ErrorState";
import JobCard from "./JobCard";

interface JobListProps {
  jobs?: Job[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  ITEMS_PER_PAGE?: number;
}

const JobList = ({
  jobs,
  isLoading,
  error,
  onRetry,
  ITEMS_PER_PAGE = 6,
}: JobListProps) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [prevJobs, setPrevJobs] = useState(jobs);

  const [searchParams] = useSearchParams();
  const isSavedFilterActive = searchParams.get("saved") === "true";
  const { savedJobIds } = useOutletContext<{ savedJobIds: string[] }>();

  if (jobs !== prevJobs) {
    setPrevJobs(jobs);
    setVisibleCount(ITEMS_PER_PAGE);
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={onRetry} />;
  }

  const filteredJobs = (jobs || []).filter((job) => {
    if (isSavedFilterActive) {
      return savedJobIds.includes(String(job.id));
    }
    return true;
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-2xl space-y-3">
        <p className="text-slate-500 font-medium">
          {isSavedFilterActive
            ? "У вас поки немає збережених вакансій."
            : "Нічого не знайдено за вашим запитом."}
        </p>
        {isSavedFilterActive && (
          <a
            href="/"
            className="inline-block text-sm font-semibold text-blue-600 hover:underline"
          >
            Показати всі вакансії
          </a>
        )}
      </div>
    );
  }

  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredJobs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="space-y-8">
      {isSavedFilterActive && (
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Збережені вакансії ({filteredJobs.length})
          </h2>
          <a
            href="/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Скинути фільтр
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center pt-6">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
          >
            <span>Показати ще</span>
            <svg
              className="w-5 h-5 text-blue-200 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;

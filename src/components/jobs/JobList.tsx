import { useState } from "react";
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

  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-2xl">
        <p className="text-slate-500 font-medium">
          Нічого не знайдено за вашим запитом.
        </p>
      </div>
    );
  }

  const visibleJobs = jobs.slice(0, visibleCount);
  const hasMore = visibleCount < jobs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center pt-4">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Показати ще
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;

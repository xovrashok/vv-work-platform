import { Bookmark } from "lucide-react";
import type { Job } from "../../types/api";
import { useOutletContext } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const jobId = String(job.id);

  const { savedJobIds, onToggleSave } = useOutletContext<{
    savedJobIds: string[];
    onToggleSave: (id: string) => void;
  }>();

  const isSaved = savedJobIds.includes(jobId);

  const handleSaved = () => {
    onToggleSave(jobId);
  };

  return (
    <div className="p-6 bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5 group">
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <div className="flex gap-[7px] items-center">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold whitespace-nowrap shadow-xs">
              {job.category}
            </span>
            <button
              onClick={handleSaved}
              aria-label={
                isSaved ? "Remove from bookmarks" : "Add to bookmarks"
              }
              className="cursor-pointer p-1 transition-transform active:scale-90"
            >
              <Bookmark
                className={
                  isSaved
                    ? "text-blue-600 fill-blue-600"
                    : "text-slate-400 hover:text-slate-600"
                }
                size={20}
              />
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {job.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm gap-2">
        <span className="font-bold text-blue-600 text-base">{job.salary}</span>
        <span className="text-slate-500 font-medium flex items-center gap-1 text-xs sm:text-sm">
          📍 {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobCard;

import type { Job } from "../../types/api";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="p-6 bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5 group">
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold whitespace-nowrap shadow-xs">
            {job.category}
          </span>
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

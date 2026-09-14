import type { Job } from "../../types/api";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold whitespace-nowrap">
            {job.category}
          </span>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>
      </div>
      <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-900">{job.salary}</span>
        <span className="text-slate-400">{job.location}</span>
      </div>
    </div>
  );
};

export default JobCard;

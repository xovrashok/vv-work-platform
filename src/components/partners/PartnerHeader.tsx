import type { Partner } from "../../types/api";

interface PartnerHeaderProps {
  partner: Partner;
}

const PartnerHeader = ({ partner }: PartnerHeaderProps) => {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-900">
            {partner.name}
          </h1>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-1">
            📍 {partner.location}
          </p>
        </div>
        <span className="px-4 py-2 bg-blue-50 text-blue-700 font-semibold text-xs rounded-xl">
          Перевірений партнер
        </span>
      </div>
      <p className="text-slate-600 leading-relaxed max-w-3xl">
        {partner.description}
      </p>
    </div>
  );
};

export default PartnerHeader;

import { Link } from "react-router-dom";
import type { Partner } from "../../types/api";

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <Link
      to={`/partners/${partner.slug}`}
      className="p-5 bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full group cursor-pointer space-y-4"
    >
      <div className="space-y-1 text-left">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {partner.name}
        </h3>
        <p className="text-xs font-semibold text-blue-600">Партнер</p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>📍 {partner.location || "Україна"}</span>
        <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </div>
    </Link>
  );
};

export default PartnerCard;

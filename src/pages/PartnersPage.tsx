import { useCallback } from "react";
import { Link } from "react-router-dom";
import { getPartners } from "../api";
import { useFetch } from "../hooks/useFetch";
import type { Partner } from "../types/api";
import Skeleton from "../components/ui/Skeleton";
import ErrorState from "../components/ui/ErrorState";

const PartnersPage = () => {
  const fetchPartners = useCallback(() => getPartners(), []);

  const {
    data: partners,
    isLoading: isPartnerLoading,
    error: partnerError,
    refetch: refetchPartner,
  } = useFetch<Partner[]>(fetchPartners);

  if (isPartnerLoading) {
    return <Skeleton className="h-48 w-full" />;
  }

  if (partnerError) {
    return <ErrorState onRetry={refetchPartner} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Наші європейські партнери
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mt-4">
          Ми співпрацюємо з перевіреними компаніями та прямими роботодавцями по
          всій Європі, щоб забезпечити вас надійними вакансіями.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners?.map((partner) => (
          <div
            key={partner.id}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="h-10 flex items-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full max-w-[160px] object-contain object-left"
                  />
                ) : (
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold rounded-xl flex items-center justify-center text-xl">
                    {partner.name.charAt(0)}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-4">
                {partner.name}
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                  📍 {partner.location}
                </span>
              </div>

              <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                {partner.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-6">
              <Link
                to={`/partners/${partner.slug}`}
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 text-sm transition-colors"
              >
                Детальніше про компанію →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;

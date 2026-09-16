import { Link } from "react-router-dom";
import { Users, ShieldCheck, Zap } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { getCandidate } from "../api";
import Skeleton from "../components/ui/Skeleton";
import ErrorState from "../components/ui/ErrorState";
import { useCallback } from "react";

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Перевірені кандидати",
    description:
      "Усі шукачі проходять первинний відбір та перевірку документів перед подачею на вакансію.",
  },
  {
    icon: Zap,
    title: "Швидкий запуск",
    description:
      "Публікація вашої вакансії займає до 15 хвилин. Перші відгуки вже в перший день.",
  },
  {
    icon: Users,
    title: "Велика база фахівців",
    description:
      "Тисячі мотивованих спеціалістів у сферах будівництва, логістики, виробництва та IT.",
  },
];

const EmployersPage = () => {
  const fetchCandidates = useCallback(() => getCandidate(), []);

  const {
    data: employers,
    isLoading: isEmloyersLoading,
    error: employersError,
    refetch: refetchEmployers,
  } = useFetch(fetchCandidates);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-blue-600/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Для роботодавців
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Знайдіть надійних працівників для вашого бізнесу
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mt-4">
            Розміщуйте вакансії та отримуйте цільові відгуки від кваліфікованих
            кандидатів по всій Європі.
          </p>
        </div>
        <Link
          to="/contacts"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-colors whitespace-nowrap"
        >
          Розмістити вакансію
        </Link>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          Чому обирають VV Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            База доступних фахівців
          </h2>
          <p className="text-slate-600 mt-2">
            Кандидати, які прямо зараз шукають роботу в Європі
          </p>
        </div>

        {employersError && (
          <div className="py-8">
            <ErrorState onRetry={refetchEmployers} />
          </div>
        )}

        {!employersError && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isEmloyersLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-64 w-full rounded-2xl" />
                ))
              : employers?.map((employer) => (
                  <div
                    key={employer.id}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {employer.name} {employer.surname}
                          </h3>
                          <p className="text-sm font-semibold text-blue-600 mt-0.5">
                            {employer.category}
                          </p>
                        </div>
                        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                          {employer.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4 text-xs text-slate-500 font-medium">
                        <span>📍 {employer.location}</span>
                        <span>💼 Досвід: {employer.experience}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {employer.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-6">
                      <Link
                        to="/contacts"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        Запропонувати вакансію
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployersPage;

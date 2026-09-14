import { useState } from "react";
import { Link } from "react-router-dom";
import { getPartners, getCategories, getJobs } from "../api";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import Skeleton, { CardSkeleton } from "../components/ui/Skeleton";
import ErrorState from "../components/ui/ErrorState";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const debouncedSearch = useDebounce(searchTerm, 300);

  const {
    data: partners,
    isLoading: isPartnersLoading,
    error: partnersError,
    refetch: refetchPartners,
  } = useFetch(getPartners);

  const { data: categories } = useFetch(getCategories);

  const {
    data: jobs,
    isLoading: isJobsLoading,
    error: jobsError,
    refetch: refetchJobs,
  } = useFetch(getJobs);

  const filteredJobs = jobs?.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.description.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesCategory = selectedCategory
      ? job.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <div className="space-y-16 pb-16">
        <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-6 relative z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Знайди роботу мрії в Європі
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Актуальні вакансії від перевірених міжнародних компаній та
              партнерів.
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Пошук за посадою чи ключовими словами..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-900 bg-white shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all placeholder:text-slate-400"
              />
              <svg
                className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </section>

        <section id="partners" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Наші партнери</h2>

          {isPartnersLoading && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          )}

          {partnersError && <ErrorState onRetry={refetchPartners} />}

          {!isPartnersLoading && !partnersError && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {partners?.map((partner) => (
                <Link
                  key={partner.id}
                  to={`/partners/${partner.slug}`}
                  className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md hover:border-slate-200 transition-all text-center font-semibold text-slate-800 flex items-center justify-center min-h-[96px]"
                >
                  {partner.name}
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Категорії та вакансії
            </h2>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Всі
              </button>
              {categories?.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {isJobsLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}

          {jobsError && <ErrorState onRetry={refetchJobs} />}

          {!isJobsLoading && !jobsError && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs?.map((job) => (
                <div
                  key={job.id}
                  className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold whitespace-nowrap">
                        {job.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-900">
                      {job.salary}
                    </span>
                    <span className="text-slate-400">{job.location}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isJobsLoading && !jobsError && filteredJobs?.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl">
              <p className="text-slate-500 font-medium">
                Нічого не знайдено за вашим запитом.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;

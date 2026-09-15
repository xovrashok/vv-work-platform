import { useState } from "react";
import { getPartners, getCategories, getJobs } from "../api";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import JobList from "../components/jobs/JobList";
import PartnerList from "../components/partner/PartnerList";
import HeroSection from "../components/home/HeroSection";
import CategoryFilter from "../components/categories/CategoryFilter";

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
        <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <section id="partners" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Наші партнери</h2>
          <PartnerList
            partners={partners}
            isLoading={isPartnersLoading}
            error={partnersError}
            onRetry={refetchPartners}
          />
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Категорії та вакансії
            </h2>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <JobList
            jobs={filteredJobs}
            isLoading={isJobsLoading}
            error={jobsError}
            onRetry={refetchJobs}
          />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

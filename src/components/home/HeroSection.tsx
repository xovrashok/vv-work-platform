interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchTerm, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
      <div className="max-w-3xl space-y-6 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Знайди роботу мрії в Європі
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          Актуальні вакансії від перевірених міжнародних компаній та партнерів.
        </p>
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Пошук за посадою чи ключовими словами..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
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
  );
};

export default HeroSection;

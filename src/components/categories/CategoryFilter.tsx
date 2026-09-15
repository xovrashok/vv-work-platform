import type { Category } from "../../types/api";

interface CategoryFilterProps {
  categories: Category[] | null | undefined;
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string | null) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
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
          onClick={() => onSelectCategory(cat.slug)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
            selectedCategory === cat.slug
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

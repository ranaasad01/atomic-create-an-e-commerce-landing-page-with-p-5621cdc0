"use client";

import { categories } from "@/lib/data/products";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Product categories">
      {categories.map((cat) => {
        const isActive = cat === active;
        const baseClass =
          "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 cursor-pointer border";
        const activeClass =
          "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200";
        const inactiveClass =
          "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50";

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={baseClass + " " + (isActive ? activeClass : inactiveClass)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

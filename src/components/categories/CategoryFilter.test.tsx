// @vitest-environment jsdom
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import CategoryFilter from "./CategoryFilter";

const mockCategories = [
  { id: 1, title: "IT & Tech", slug: "it-tech" },
  { id: 2, title: "Marketing", slug: "marketing" },
];

describe("CategoryFilter", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders 'All' button and category buttons", () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory={null}
        onSelectCategory={vi.fn()}
      />,
    );

    expect(screen.getByText("Всі")).toBeInTheDocument();
    expect(screen.getByText("IT & Tech")).toBeInTheDocument();
    expect(screen.getByText("Marketing")).toBeInTheDocument();
  });

  it("calls onSelectCategory with correct slug when clicked", () => {
    const handleSelectCategory = vi.fn();

    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory={null}
        onSelectCategory={handleSelectCategory}
      />,
    );

    fireEvent.click(screen.getByText("IT & Tech"));
    expect(handleSelectCategory).toHaveBeenCalledWith("it-tech");

    fireEvent.click(screen.getByText("Всі"));
    expect(handleSelectCategory).toHaveBeenCalledWith(null);
  });
});

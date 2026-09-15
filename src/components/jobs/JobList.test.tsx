// @vitest-environment jsdom
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import JobList from "./JobList";
import type { Job } from "../../types/api";

expect.extend(matchers);

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    partnerId: 101,
    category: "it-tech",
    salary: "$2000",
    location: "Київ",
    type: "Full-time",
    description: "React / TypeScript developer needed",
  },
  {
    id: 2,
    title: "Backend Developer",
    partnerId: 102,
    category: "it-tech",
    salary: "$2500",
    location: "Львів",
    type: "Full-time",
    description: "Node.js engineer needed",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    partnerId: 103,
    category: "design",
    salary: "$1500",
    location: "Дистанційно",
    type: "Part-time",
    description: "Figma designer needed",
  },
];

describe("JobList", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders skeletons when loading", () => {
    const { container } = render(
      <JobList jobs={[]} isLoading={true} error={null} onRetry={vi.fn()} />,
    );

    expect(container.querySelectorAll(".animate-pulse").length).toBeGreaterThan(
      0,
    );
  });

  it("renders error state when error is provided", () => {
    render(
      <JobList
        jobs={[]}
        isLoading={false}
        error="Network Error"
        onRetry={vi.fn()}
      />,
    );

    expect(screen.getByText(/помилка/i)).toBeInTheDocument();
  });

  it("renders empty state message when jobs array is empty", () => {
    render(
      <JobList jobs={[]} isLoading={false} error={null} onRetry={vi.fn()} />,
    );

    expect(
      screen.getByText("Нічого не знайдено за вашим запитом."),
    ).toBeInTheDocument();
  });

  it("loads more jobs when 'Показати ще' is clicked", () => {
    render(
      <JobList
        jobs={mockJobs}
        isLoading={false}
        error={null}
        onRetry={vi.fn()}
        ITEMS_PER_PAGE={2}
      />,
    );

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
    expect(screen.queryByText("UI/UX Designer")).not.toBeInTheDocument();

    const loadMoreButton = screen.getByRole("button", { name: /показати ще/i });
    fireEvent.click(loadMoreButton);

    expect(screen.getByText("UI/UX Designer")).toBeInTheDocument();
  });
});

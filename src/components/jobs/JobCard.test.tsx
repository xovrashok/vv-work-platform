// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, afterEach } from "vitest";
import JobCard from "./JobCard";
import type { Job } from "../../types/api";

const mockJob: Job = {
  id: 101,
  title: "Frontend Developer (React)",
  partnerId: 5,
  category: "IT / Software",
  salary: "2000 - 3000 $",
  location: "Віддалено",
  description: "Шукаємо досвідченого React розробника в нашу команду.",
  type: "Повна зайнятість",
};

describe("JobCard Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders job details correctly", () => {
    render(
      <BrowserRouter>
        <JobCard job={mockJob} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Frontend Developer (React)" }),
    ).toBeInTheDocument();

    expect(screen.getByText("IT / Software")).toBeInTheDocument();
    expect(screen.getByText("2000 - 3000 $")).toBeInTheDocument();
    expect(screen.getByText(/віддалено/i)).toBeInTheDocument();
  });

  it("renders job description text", () => {
    render(
      <BrowserRouter>
        <JobCard job={mockJob} />
      </BrowserRouter>,
    );

    expect(
      screen.getByText("Шукаємо досвідченого React розробника в нашу команду."),
    ).toBeInTheDocument();
  });
});

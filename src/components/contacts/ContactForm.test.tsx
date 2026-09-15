// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import ContactForm from "./ContactForm";

vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("ContactForm Validation", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders form correctly", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Иван")).toBeInTheDocument();
  });

  it("shows error messages when inputs are invalid", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", {
      name: /надіслати повідомлення/i,
    });
    fireEvent.click(submitBtn);

    expect(
      await screen.findByText("Ім'я має містити щонайменше 2 символи"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Вкажіть телефон або Telegram"),
    ).toBeInTheDocument();
  });
});

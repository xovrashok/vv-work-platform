// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PartnerHeader from "./PartnerHeader";
import type { Partner } from "../../types/api";

const mockPartner: Partner = {
  id: 1,
  name: "Global Tech Solutions",
  location: "Київ",
  description: "Провідна компанія з розробки програмного забезпечення.",
  slug: "global-tech",
  logo: "/logo.png",
};

describe("PartnerHeader Component", () => {
  it("renders partner header details correctly", () => {
    render(<PartnerHeader partner={mockPartner} />);

    expect(
      screen.getByRole("heading", { name: "Global Tech Solutions", level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getByText(/київ/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Провідна компанія з розробки програмного забезпечення.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByText("Перевірений партнер")).toBeInTheDocument();
  });
});

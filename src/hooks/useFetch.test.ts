// @vitest-environment jsdom
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useFetch } from "./useFetch";
import type { Job } from "../types/api";

const mockJobs: Job[] = [
  {
    id: 1,
    title: "React Developer",
    partnerId: 10,
    category: "Development",
    salary: "$2500",
    location: "Київ",
    description: "Разработка интерфейсов",
    type: "Full-time",
  },
];

describe("useFetch hook", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches and returns data successfully", async () => {
    const fetcherFn = vi.fn().mockResolvedValue(mockJobs);

    const { result } = renderHook(() => useFetch<Job[]>(fetcherFn));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual(mockJobs);
    expect(result.current.error).toBeNull();
  });

  it("handles fetch error correctly", async () => {
    const fetcherFn = vi
      .fn()
      .mockRejectedValue(new Error("Internal Server Error"));

    const { result } = renderHook(() => useFetch<Job[]>(fetcherFn));

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeTruthy();
  });
});

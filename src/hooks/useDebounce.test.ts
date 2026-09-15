// @vitest-environment jsdom
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useDebounce } from "./useDebounce";

describe("useDebounce hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("react", 500));
    expect(result.current).toBe("react");
  });

  it("should delay updating the debounced value", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "react", delay: 500 } },
    );

    rerender({ value: "vue", delay: 500 });
    expect(result.current).toBe("react");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("vue");
  });
});

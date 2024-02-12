import { renderHook } from "@testing-library/react";
import { useInitialize } from "./useInitialize";

describe("useInitialize", () => {
  it("calls the given block for the first time", () => {
    let count = 0;
    renderHook(() => useInitialize(() => count++));
    expect(count).toBe(1);
  });

  it("calls the given block only once", () => {
    let count = 0;
    const { rerender } = renderHook(() => useInitialize(() => count++));
    rerender();
    expect(count).toBe(1);
  });
});

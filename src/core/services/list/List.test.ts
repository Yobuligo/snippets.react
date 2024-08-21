import { List } from "./List";

describe("List", () => {
  describe("isEmpty", () => {
    it("returns true if list is empty", () => {
      expect(List.isEmpty([])).toBe(true);
    });

    it("returns false if list is not empty", () => {
      expect(List.isEmpty([1, 2, 3])).toBe(false);
    });
  });

  describe("isNotEmpty", () => {
    it("returns true if list is not empty", () => {
      expect(List.isNotEmpty([1, 2, 3])).toBe(true);
    });

    it("returns false if list is empty", () => {
      expect(List.isNotEmpty([])).toBe(false);
    });
  });
});

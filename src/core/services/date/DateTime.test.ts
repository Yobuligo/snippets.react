import { DateTime } from "./DateTime";

describe("DateTime", () => {
  describe("toYear", () => {
    it("returns the year", () => {
      const year = new Date().getFullYear();
      expect(DateTime.toYear(new Date())).toBe(year);
    });
  });

  describe("toMonth", () => {
    it("returns the month", () => {
      const month = new Date().getMonth();
      expect(DateTime.toMonth(new Date())).toBe(month);      
    });
  });
});

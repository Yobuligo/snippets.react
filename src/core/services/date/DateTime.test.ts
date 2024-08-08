import { DateTime } from "./DateTime";

const timestamp = "2024-12-31T12:34:59.123";

describe("DateTime", () => {
  const date = new Date(timestamp);

  describe("toYear", () => {
    it("returns the year", () => {
      expect(DateTime.toYear(date)).toBe(2024);
    });
  });

  describe("toMonth", () => {
    it("returns the month", () => {
      expect(DateTime.toMonth(date)).toBe(12);
    });
  });

  describe("toDay", () => {
    it("returns the day", () => {
      expect(DateTime.toDay(date)).toBe(31);
    });
  });

  describe("toHours", () => {
    it("returns the hours", () => {
      expect(DateTime.toHours(date)).toBe(12);
    });
  });

  describe("toMinutes", () => {
    it("returns the minutes", () => {
      expect(DateTime.toMinutes(date)).toBe(34);
    });
  });

  describe("toSeconds", () => {
    it("returns the seconds", () => {
      expect(DateTime.toSeconds(date)).toBe(59);
    });
  });
});

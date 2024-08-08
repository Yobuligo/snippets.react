import { DateTime } from "./DateTime";
import { Duration } from "./Duration";

const timestamp = "2024-12-31T12:34:42.123";

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
      expect(DateTime.toSeconds(date)).toBe(42);
    });
  });

  describe("add", () => {
    it("adds duration", () => {
      const newDate = DateTime.add(date, new Duration(77));
      expect(newDate.getMilliseconds()).toBe(200);
    });

    it("adds milliseconds", () => {
      const newDate = DateTime.add(date, 77);
      expect(newDate.getMilliseconds()).toBe(200);
    });
  });

  describe("addSeconds", () => {
    it("adds seconds", () => {
      expect(DateTime.addSeconds(date, 3).getSeconds()).toBe(45);
    });

    it("adds seconds over minutes", () => {
      const newDate = DateTime.addSeconds(date, 20);
      expect(newDate.getSeconds()).toBe(2);
      expect(newDate.getMinutes()).toBe(35);
    });
  });

  describe("addMinutes", () => {
    it("adds minutes", () => {
      expect(DateTime.addMinutes(date, 3).getMinutes()).toBe(37);
    });

    it("adds minutes over hour", () => {
      const newDate = DateTime.addMinutes(date, 30);
      expect(newDate.getMinutes()).toBe(4);
      expect(newDate.getHours()).toBe(13);
    });
  });

  describe("addHours", () => {
    it("adds hours", () => {
      expect(DateTime.addHours(date, 2).getHours()).toBe(14);
    });

    it("adds hours over day", () => {
      const newDate = DateTime.addHours(date, 14);
      expect(newDate.getHours()).toBe(2);
      expect(DateTime.toYear(newDate)).toBe(2025);
      expect(DateTime.toMonth(newDate)).toBe(1);
      expect(DateTime.toDay(newDate)).toBe(1);
    });
  });

  describe("addDays", () => {
    it("adds days", () => {
      const newDate = DateTime.addDays(date, 2);
      expect(DateTime.toDay(newDate)).toBe(2);
    });

    it("adds days over month", () => {
      const newDate = DateTime.addDays(date, 40);
      expect(DateTime.toDay(newDate)).toBe(9);
      expect(DateTime.toYear(newDate)).toBe(2025);
      expect(DateTime.toMonth(newDate)).toBe(2);
    });
  });
});

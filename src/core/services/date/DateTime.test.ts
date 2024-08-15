import { DateTime } from "./DateTime";
import { Duration } from "./Duration";

const timestamp = "2024-12-31T12:34:42.123";

describe("DateTime", () => {
  const date = new Date(timestamp);

  describe("compare", () => {
    it("is later than", () => {
      const now = new Date();
      const later = DateTime.addHours(now, 1);
      expect(DateTime.compare(later, now)).toBe(1);
    });

    it("is earlier than", () => {
      const now = new Date();
      const later = DateTime.subtractHours(now, 1);
      expect(DateTime.compare(later, now)).toBe(-1);
    });

    it("is equal", () => {
      const now = new Date();
      expect(DateTime.compare(now, now)).toBe(0);
    });
  });

  describe("create", () => {
    it("creates instance", () => {
      const date = DateTime.create("2024-08-12", "22:34:16");
      expect(DateTime.toYear(date)).toBe(2024);
      expect(DateTime.toMonth(date)).toBe(8);
      expect(DateTime.toDay(date)).toBe(12);
      expect(DateTime.toHours(date)).toBe(22);
      expect(DateTime.toMinutes(date)).toBe(34);
      expect(DateTime.toSeconds(date)).toBe(16);
    });
  });

  describe("isAfter", () => {
    it("returns true if after", () => {
      const now = new Date();
      const later = DateTime.addHours(now, 1);
      expect(DateTime.isAfter(later, now)).toBe(true);
    });

    it("returns false if before", () => {
      const now = new Date();
      const later = DateTime.subtractHours(now, 1);
      expect(DateTime.isAfter(later, now)).toBe(false);
    });

    it("returns false if equal", () => {
      const now = new Date();
      expect(DateTime.isAfter(now, now)).toBe(false);
    });

    it("returns true if after compared to current date", () => {
      const later = DateTime.addHours(new Date(), 1);
      expect(DateTime.isAfter(later)).toBe(true);
    });

    it("returns false if before compared to current date", () => {
      const later = DateTime.subtractHours(new Date(), 1);
      expect(DateTime.isAfter(later)).toBe(false);
    });

    it("returns false if equal compared to current date", () => {
      const now = new Date();
      expect(DateTime.isAfter(now)).toBe(false);
    });
  });

  describe("isBefore", () => {
    it("returns true if before", () => {
      const now = new Date();
      const before = DateTime.subtractHours(now, 1);
      expect(DateTime.isBefore(before, now)).toBe(true);
    });

    it("returns false if after", () => {
      const now = new Date();
      const before = DateTime.addHours(now, 1);
      expect(DateTime.isBefore(before, now)).toBe(false);
    });

    it("returns false if equal", () => {
      const now = new Date();
      expect(DateTime.isBefore(now, now)).toBe(false);
    });

    it("returns true if before compared to current date", () => {
      const before = DateTime.subtractHours(new Date(), 1);
      expect(DateTime.isBefore(before)).toBe(true);
    });

    it("returns false if after compared to current date", () => {
      const before = DateTime.addHours(new Date(), 1);
      expect(DateTime.isBefore(before)).toBe(false);
    });

    it("returns false if equal compared to current date", () => {
      const now = new Date();
      expect(DateTime.isBefore(now)).toBe(false);
    });
  });

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

  describe("toMilliseconds", () => {
    it("returns the milliseconds", () => {
      expect(DateTime.toMilliseconds(date)).toBe(123);
    });
  });

  describe("toDate", () => {
    it("returns the date", () => {
      expect(DateTime.toDate(date)).toBe("2024-12-31");
      // T12:34:42.123
    });
  });

  describe("toTime", () => {
    it("returns the time", () => {
      expect(DateTime.toTime(date)).toBe("12:34");
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

  describe("addMilliseconds", () => {
    it("adds milliseconds", () => {
      expect(DateTime.addMilliseconds(date, 35).getMilliseconds()).toBe(158);
    });

    it("adds milliseconds over seconds", () => {
      const newDate = DateTime.addMilliseconds(date, 1000);
      expect(newDate.getMilliseconds()).toBe(123);
      expect(newDate.getSeconds()).toBe(43);
    });
  });

  describe("getWeekDates", () => {
    it("returns week dates", () => {
      const date = new Date("2024-08-15");
      const weekDates = DateTime.getWeekDates(date);
      expect(DateTime.toDate(weekDates.start)).toBe("2024-08-12");
      expect(DateTime.toDate(weekDates.end)).toBe("2024-08-18");
    });
  });

  describe("now", () => {
    it("returns a date instance", () => {
      expect(DateTime.now()).not.toBeNull();
    });

    it("returns new date instances", () => {
      expect(DateTime.now()).not.toBe(DateTime.now());
    });
  });

  describe("subtractDays", () => {
    it("subtract days", () => {
      const newDate = DateTime.subtractDays(date, 2);
      expect(DateTime.toDay(newDate)).toBe(29);
    });

    it("subtract days over month", () => {
      const newDate = DateTime.subtractDays(date, 40);
      expect(DateTime.toDay(newDate)).toBe(21);
      expect(DateTime.toYear(newDate)).toBe(2024);
      expect(DateTime.toMonth(newDate)).toBe(11);
    });
  });

  describe("subtractHours", () => {
    it("subtracts hours", () => {
      expect(DateTime.subtractHours(date, 2).getHours()).toBe(10);
    });

    it("subtracts hours over day", () => {
      const newDate = DateTime.subtractHours(date, 14);
      expect(newDate.getHours()).toBe(22);
      expect(DateTime.toYear(newDate)).toBe(2024);
      expect(DateTime.toMonth(newDate)).toBe(12);
      expect(DateTime.toDay(newDate)).toBe(30);
    });
  });

  describe("subtractMinutes", () => {
    it("subtracts minutes", () => {
      expect(DateTime.subtractMinutes(date, 3).getMinutes()).toBe(31);
    });

    it("subtracts minutes over hour", () => {
      const newDate = DateTime.subtractMinutes(date, 60);
      expect(newDate.getMinutes()).toBe(34);
      expect(newDate.getHours()).toBe(11);
    });
  });

  describe("subtractSeconds", () => {
    it("subtracts seconds", () => {
      expect(DateTime.subtractSeconds(date, 3).getSeconds()).toBe(39);
    });

    it("subtracts seconds over minutes", () => {
      const newDate = DateTime.subtractSeconds(date, 60);
      expect(newDate.getSeconds()).toBe(42);
      expect(newDate.getMinutes()).toBe(33);
    });
  });

  describe("subtractMilliseconds", () => {
    it("subtracts milliseconds", () => {
      expect(DateTime.subtractMilliseconds(date, 35).getMilliseconds()).toBe(
        88
      );
    });

    it("subtracts milliseconds over seconds", () => {
      const newDate = DateTime.subtractMilliseconds(date, 1000);
      expect(newDate.getMilliseconds()).toBe(123);
      expect(newDate.getSeconds()).toBe(41);
    });
  });
});

import { DateTimeFormatter } from "./DateTimeFormatter";

describe("DateTimeFormatterFormatter", () => {
  describe("DateTimeFormatter.format", () => {
    it("should format full year with yyyy", () => {
      const date = new Date(2024, 7, 9); // 9th August 2024
      const pattern = "yyyy";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("2024");
    });

    it("should format last two digits of year with yy", () => {
      const date = new Date(2024, 7, 9);
      const pattern = "yy";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("24");
    });

    it("should format month with MM", () => {
      const date = new Date(2024, 7, 9); // August is month 8
      const pattern = "MM";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("08");
    });

    it("should format month without leading zero with M", () => {
      const date = new Date(2024, 7, 9);
      const pattern = "M";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("8");
    });

    it("should format day with dd", () => {
      const date = new Date(2024, 7, 9);
      const pattern = "dd";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("09");
    });

    it("should format day without leading zero with d", () => {
      const date = new Date(2024, 7, 9);
      const pattern = "d";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("9");
    });

    it("should format hour with hh", () => {
      const date = new Date(2024, 7, 9, 5); // 5:00 AM
      const pattern = "hh";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("05");
    });

    it("should format hour without leading zero with h", () => {
      const date = new Date(2024, 7, 9, 5);
      const pattern = "h";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("5");
    });

    it("should format minutes with mm", () => {
      const date = new Date(2024, 7, 9, 5, 7); // 5:07 AM
      const pattern = "mm";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("07");
    });

    it("should format minutes without leading zero with m", () => {
      const date = new Date(2024, 7, 9, 5, 7);
      const pattern = "m";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("7");
    });

    it("should format seconds with ss", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9); // 5:07:09 AM
      const pattern = "ss";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("09");
    });

    it("should format seconds without leading zero with s", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9);
      const pattern = "s";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("9");
    });

    it("should format milliseconds with fff", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9, 123); // 123 milliseconds
      const pattern = "fff";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("123");
    });

    it("should format first two digits of milliseconds with ff", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9, 123);
      const pattern = "ff";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("12");
    });

    it("should format first digit of milliseconds with f", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9, 123);
      const pattern = "f";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("1");
    });

    it("should format complex pattern", () => {
      const date = new Date(2024, 7, 9, 5, 7, 9, 123);
      const pattern = "yyyy-MM-dd hh:mm:ss.fff";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("2024-08-09 05:07:09.123");
    });

    it("should format pattern with single digits for month and day", () => {
      const date = new Date(2024, 0, 9); // January 9th, 2024
      const pattern = "M/d/yyyy";
      const result = DateTimeFormatter.format(date, pattern);
      expect(result).toBe("1/9/2024");
    });
  });
});

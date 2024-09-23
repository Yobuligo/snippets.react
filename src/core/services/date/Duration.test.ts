import { Duration } from "./Duration";

describe("Duration", () => {
  it("should correctly calculate days, hours, minutes, seconds, and milliseconds", () => {
    const duration = new Duration(90061000); // 1 day, 1 hour, 1 minute, 1 second

    expect(duration.days).toBe(1);
    expect(duration.hours).toBe(1);
    expect(duration.minutes).toBe(1);
    expect(duration.seconds).toBe(1);
    expect(duration.milliseconds).toBe(0);
  });

  it("should handle cases with no days", () => {
    const duration = new Duration(3661000); // 1 hour, 1 minute, 1 second

    expect(duration.days).toBe(0);
    expect(duration.hours).toBe(1);
    expect(duration.minutes).toBe(1);
    expect(duration.seconds).toBe(1);
    expect(duration.milliseconds).toBe(0);
  });

  it("should compare durations correctly", () => {
    const duration1 = new Duration(90061000);
    const duration2 = new Duration(3661000);

    expect(Duration.compare(duration1, duration2)).toBe(1); // duration1 > duration2
    expect(Duration.compare(duration2, duration1)).toBe(-1); // duration2 < duration1
    expect(Duration.compare(duration1, new Duration(90061000))).toBe(0); // duration1 == new Duration(90061000)
  });

  it("should format the duration correctly", () => {
    const duration = new Duration(90061000); // 1 day, 1 hour, 1 minute, 1 second
    const formatted = Duration.format(duration);

    expect(formatted).toBe("1d 01:01:01");
  });

  it("should format the duration with leading zeros correctly", () => {
    const duration = new Duration(3661000); // 1 hour, 1 minute, 1 second
    const formatted = Duration.format(duration);

    expect(formatted).toBe("0d 01:01:01");
  });

  it("should sum multiple durations correctly", () => {
    const duration1 = new Duration(90061000); // 1 day, 1 hour, 1 minute, 1 second
    const duration2 = new Duration(3661000); // 1 hour, 1 minute, 1 second
    const sum = Duration.sum(duration1, duration2);

    expect(sum.days).toBe(1);
    expect(sum.hours).toBe(2);
    expect(sum.minutes).toBe(2);
    expect(sum.seconds).toBe(2);
    expect(sum.milliseconds).toBe(0);
  });

  describe("totalHours", () => {
    it("Returns values lower than a day", () => {
      const duration = new Duration(3661000); // 1 hour, 1 minute, 1 second
      expect(duration.totalHours).toBe(1);
      expect(duration.hours).toBe(1);
      expect(duration.minutes).toBe(1);
      expect(duration.seconds).toBe(1);
      expect(duration.milliseconds).toBe(0);
    });

    it("Returns total hours", () => {
      const duration = new Duration(3551751000); // 41 day, 2 hour, 35 minute, 51 second
      expect(duration.totalHours).toBe(986);
      expect(duration.minutes).toBe(35);
      expect(duration.seconds).toBe(51);
      expect(duration.milliseconds).toBe(0);
    });
  });

  describe("workingDays", () => {
    it("Returns 0 if less than required working day hours", () => {
      const duration = new Duration(3661000); // 1 hour, 1 minute, 1 second
      expect(duration.workingDays()).toBe(0);
    });

    it("Returns working days", () => {
      const duration = new Duration(3551751000); // 41 day, 2 hour, 35 minute, 51 second
      expect(duration.workingDays()).toBe(123);
    });

    it("Returns working days with given working days hours", () => {
      const duration = new Duration(3551751000); // 41 day, 2 hour, 35 minute, 51 second
      expect(duration.workingDays(7)).toBe(140);
    });
  });
});

import { Duration } from "./Duration";

export class DateTime {
  static compare(left: Date, right: Date): number {
    if (left > right) {
      return 1;
    }

    if (left < right) {
      return -1;
    }

    return 0;
  }

  /**
   * Converts the given {@link date} to a string in format yyyy-mmm-dd hh:mm:ss.mse
   */
  static format(date: Date): string {
    const [dateString, timeString] = this.toLocalISOString(date).split("T");
    return `${dateString} ${timeString}`;
  }

  static formatDate(date: Date): string {
    const [year, month, day] = this.toDate(date).split("-");
    return `${day}.${month}.${year}`;
  }

  /**
   * Returns an instance of Date of the current time
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Calculates the difference between the given {@link later} and {@link earlier} dates and returns the result as duration.
   */
  static subtract(later: Date, earlier: Date): Duration {
    const msec =
      this.toDateInstance(later).getTime() -
      this.toDateInstance(earlier).getTime();
    return new Duration(msec);
  }

  /**
   * Converts the given {@link date} to a string in format yyyy-mmm-dd
   */
  static toDate(date: Date): string {
    const [dateString] = this.toLocalISOString(date).split("T");
    return dateString;
  }

  /**
   * Extracts and returns the days of the given {@link date}.
   */
  static toDay(date: Date): number {
    const [, , day] = this.toDate(date).split("-");
    return parseInt(day);
  }

  /**
   * Extracts and returns the hours of the given {@link date}.
   */
  static toHours(date: Date): number {
    const [hours] = this.toTime(date).split(":");
    return parseInt(hours);
  }

  /**
   * Converts the given {@link date} to a string in format yyyy-mm-ddThh:mm:ss.mse for the current time zone.
   */
  static toLocalISOString(date: Date): string {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
    return date;
  }

  /**
   * Extracts and returns the minutes of the given {@link date}.
   */
  static toMinutes(date: Date): number {
    const [, minutes] = this.toTime(date).split(":");
    return parseInt(minutes);
  }

  /**
   * Extracts and returns the months of the given {@link date}.
   */
  static toMonth(date: Date): number {
    const [, month] = this.toDate(date).split("-");
    return parseInt(month);
  }

  /**
   * Extracts and returns the minutes of the given {@link date}.
   */
  static toSeconds(date: Date): number {
    const [, , seconds] = this.toTime(date).split(":");
    return parseInt(seconds);
  }

  /**
   * Converts the given {@link date} to a string in format hh:mm:ss.mse.
   */
  static toTime(date: Date): string {
    const [, timeString] = this.toLocalISOString(date).split("T");
    return timeString;
  }

  /**
   * Extracts and returns the years of the given {@link date}.
   */
  static toYear(date: Date): number {
    const [year] = this.toDate(date).split("-");
    return parseInt(year);
  }

  /**
   * Converts a {@link date} in format string like yyyy-mm-ddThh:mm:ss.msc to instance of Date or directly returns {@link date}.
   */
  private static toDateInstance(date: Date): Date {
    if (date instanceof Date) {
      return date;
    }
    return new Date(date);
  }
}

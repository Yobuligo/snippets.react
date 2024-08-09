import { Duration } from "./Duration";

export class DateTime {
  private static msecInSeconds = 1000;
  private static msecInMinutes = 60000;
  private static msecInHours = 3600000;
  private static msecInDays = 86400000;

  /**
   * Adds the given {@link duration} to {@link date} and returns a new date instance.
   */
  static add(date: Date, duration: Duration): Date;
  static add(date: Date, milliseconds: number): Date;
  static add(first: Date, second: unknown): any {
    if (second instanceof Duration) {
      return new Date(
        this.toDateInstance(first).getTime() + second.totalMilliseconds
      );
    }

    if (typeof second === "number") {
      return new Date(this.toDateInstance(first).getTime() + second);
    }
  }

  /**
   * Adds the given {@link days} to {@link date} and returns a new date instance.
   */
  static addDays(date: Date, days: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() + days * this.msecInDays
    );
  }

  /**
   * Adds the given {@link hours} to {@link date} and returns a new date instance.
   */
  static addHours(date: Date, hours: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() + hours * this.msecInHours
    );
  }

  /**
   * Adds the given {@link minutes} to {@link date} and returns a new date instance.
   */
  static addMinutes(date: Date, minutes: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() + minutes * this.msecInMinutes
    );
  }

  /**
   * Adds the given {@link seconds} to {@link date} and returns a new date instance.
   */
  static addSeconds(date: Date, seconds: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() + seconds * this.msecInSeconds
    );
  }

  /**
   * Compares the 2 dates {@link left} and {@link right}.
   *
   * Returns 1 if {@link left} is greater than {@link right}, which means later.
   * Returns -1 if {@link left} is smaller than {@link right}, which means earlier.
   * Returns 0 if {@link left} is equal to {@link right}.
   */
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
   * Disassembles the given {@link date} into its components.
   */
  static disassemble(
    date: Date
  ): [
    yyyy: number,
    MM: number,
    dd: number,
    hh: number,
    mm: number,
    ss: number,
    fff: number
  ] {
    if (date instanceof Date) {
      const yyyy = date.getFullYear();
      const MM = date.getMonth() + 1;
      const dd = date.getDate();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();
      const fff = date.getMilliseconds();
      return [yyyy, MM, dd, hh, mm, ss, fff];
    }

    if (typeof date === "string") {
      const [dateString, timeString] = (date as string).split("T");
      const [yyyy, MM, dd] = dateString.split("-");
      const [hh, mm, ss] = timeString.split(":");
      const [, fff] = timeString.split(".");
      return [
        parseInt(yyyy),
        parseInt(MM),
        parseInt(dd),
        parseInt(hh),
        parseInt(mm),
        parseInt(ss),
        parseInt(fff),
      ];
    }

    throw new Error(
      `Error while disassembling date. Date has an invalid type.`
    );
  }

  /**
   * Returns an instance of Date of the current time
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Subtracts the given {@link duration} from {@link date} and returns a new date instance.
   */
  static subtract(date: Date, duration: Duration): Date;
  /**
   * Calculates the difference between the given {@link later} and {@link earlier} dates and returns the result as duration.
   */
  static subtract(later: Date, earlier: Date): Duration;
  static subtract(first: Date, second: unknown): any {
    if (second instanceof Date) {
      const msec =
        this.toDateInstance(first).getTime() -
        this.toDateInstance(second).getTime();
      return new Duration(msec);
    }

    if (second instanceof Duration) {
      return new Date(
        this.toDateInstance(first).getTime() - second.totalMilliseconds
      );
    }
  }

  /**
   * Extracts and returns the days of the given {@link date}.
   */
  static toDay(date: Date): number {
    return this.disassemble(date)[2];
  }

  /**
   * Extracts and returns the hours of the given {@link date}.
   */
  static toHours(date: Date): number {
    return this.disassemble(date)[3];
  }

  /**
   * Converts the given {@link date} to a string in format yyyy-mm-ddThh:mm:ss.fff for the current time zone.
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
    return this.disassemble(date)[4];
  }

  /**
   * Extracts and returns the months of the given {@link date}.
   */
  static toMonth(date: Date): number {
    return this.disassemble(date)[1];
  }

  /**
   * Extracts and returns the seconds of the given {@link date}.
   */
  static toSeconds(date: Date): number {
    return this.disassemble(date)[5];
  }

  /**
   * Extracts and returns the years of the given {@link date}.
   */
  static toYear(date: Date): number {
    return this.disassemble(date)[0];
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

import { DateTimeFormatter } from "./DateTimeFormatter";
import { Duration } from "./Duration";
import { IDateTimeSpan } from "./IDateTimeSpan";

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
   * Adds the given {@link milliseconds} to {@link date} and returns a new date instance.
   */
  static addMilliseconds(date: Date, milliseconds: number): Date {
    return new Date(this.toDateInstance(date).getTime() + milliseconds);
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
    const leftDateInstance = this.toDateInstance(left);
    const rightDateInstance = this.toDateInstance(right);

    if (leftDateInstance > rightDateInstance) {
      return 1;
    }

    if (leftDateInstance < rightDateInstance) {
      return -1;
    }

    return 0;
  }

  /**
   * Creates a new Date instance from the given {@link date} and {@link time} string.
   * Considers {@link date} and {@link time} as local time.
   */
  static create(date: String, time: string): Date {
    // if a time has no seconds, we have to add them
    let dateString = "";
    if (time.length === 5) {
      dateString = `${date}T${time}:00.000`;
    } else {
      dateString = `${date}T${time}.000`;
    }
    return new Date(dateString);
  }

  /**
   * Formats the given {@link date} according to the specified {@link pattern}.
   *
   * #### Year Patterns:
   * - **yyyy**: Full year (e.g., `2024`), padded with leading zeros if necessary (e.g., `0988`).
   * - **yy**: Last 2 digits of the year (e.g., `24` for `2024`), padded with leading zeros if necessary (e.g., `08` for `2008`).
   *
   * #### Month Patterns:
   * - **MM**: Month with leading zero (e.g., `12` or `08`).
   * - **M**: Month without leading zero (e.g., `12` or `8`).
   *
   * #### Day Patterns:
   * - **dd**: Day with leading zero (e.g., `24` or `05`).
   * - **d**: Day without leading zero (e.g., `24` or `5`).
   *
   * #### Hour Patterns:
   * - **hh**: Hour in 24-hour format with leading zero (e.g., `13` or `09`).
   * - **h**: Hour in 24-hour format without leading zero (e.g., `13` or `9`).
   *
   * #### Minute Patterns:
   * - **mm**: Minutes with leading zero (e.g., `38` or `02`).
   * - **m**: Minutes without leading zero (e.g., `38` or `2`).
   *
   * #### Millisecond Patterns:
   * - **fff**: Milliseconds with up to three digits, padded with trailing zeros if necessary (e.g., `138` or `200`).
   * - **ff**: First 2 digits of milliseconds, padded with trailing zeros if necessary (e.g., `13` or `20`).
   * - **f**: First digit of milliseconds (e.g., `1`).
   */
  static format(date: Date, pattern: string): string {
    return DateTimeFormatter.format(date, pattern);
  }

  /**
   * Returns the date of the last day of the month derived from the given {@link date}.
   */
  static getMonthEndDate(date: Date): Date {
    // Create date of first of next month
    const endDate = new Date(date.getFullYear(), DateTime.toMonth(date), 1);

    // Subtract last day by one to get the last of the
    return this.subtractDays(endDate, 1);
  }

  /**
   * Returns the first and last date of a month derived from the given {@link date}.
   *
   * If {@link date} is a date of 15. january the date of the 1. january and last will be returned
   */
  static getMonthSpanDates(date: Date): IDateTimeSpan {
    const from = this.getMonthStartDate(date);
    const to = this.getMonthEndDate(date);
    return { from, to };
  }

  /**
   * Returns the date of the first day of the month derived from the given {@link date}.
   */
  static getMonthStartDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  /**
   * Returns the date of the last day of the week derived from the given {@link date}.
   */
  static getWeekEndDate(date: Date): Date {
    const endDate = new Date(date);
    const dayOfWeek = date.getDay();

    // End of week is sunday
    const diffToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    endDate.setDate(date.getDate() + diffToSunday);
    endDate.setHours(23, 59, 59, 999);
    return endDate;
  }

  /**
   * Returns the first and last date of a week derived from the given {@link date}.
   *
   * If {@link date} is a date of wednesday the date of the previous monday and the following sunday will be returned
   */
  static getWeekSpanDates(date: Date): IDateTimeSpan {
    const from = this.getWeekStartDate(date);
    const to = this.getWeekEndDate(date);
    return { from, to };
  }

  /**
   * Returns the date of the first day of the week derived from the given {@link date}.
   */
  static getWeekStartDate(date: Date): Date {
    const from = new Date(date);
    const dayOfWeek = date.getDay();

    // Start of week is monday
    const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    from.setDate(date.getDate() - diffToMonday);
    from.setHours(0, 0, 0, 0);
    return from;
  }

  /**
   * Returns the date of the last day of the year derived from the given {@link date}.
   */
  static getYearEndDate(date: Date): Date {
    return new Date(date.getFullYear(), 11, 31);
  }

  /**
   * Returns the first and last date of a year derived from the given {@link date}.
   */
  static getYearSpanDates(date: Date): IDateTimeSpan {
    const from = this.getYearStartDate(date);
    const to = this.getYearEndDate(date);
    return { from, to };
  }

  /**
   * Returns the date of the first day of the year derived from the given {@link date}.
   */
  static getYearStartDate(date: Date): Date {
    return new Date(date.getFullYear(), 0, 1);
  }

  /**
   * Compares the given {@link date} with {@link compareDate} or with the current date if {@link compareDate} is undefined
   * and returns true if date is after (so later or younger) the compared value otherwise false.
   */
  static isAfter(date: Date, compareDate?: Date): boolean {
    return DateTime.compare(date, compareDate ?? new Date()) > 0;
  }

  /**
   * Compares the given {@link date} with {@link compareDate} or with the current date if {@link compareDate} is undefined
   * and returns true if date is before (so earlier or older) the compared value otherwise false.
   */
  static isBefore(date: Date, compareDate?: Date): boolean {
    return DateTime.compare(date, compareDate ?? new Date()) < 0;
  }

  /**
   * Returns an instance of Date of the current time
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Returns true if the {@link outer} span contains the {@link inner} span otherwise false.
   *
   * @example
   * const outer: IDateTimeSpan = {
   *   from: new Date(2024, 8, 1),
   *   to: new Date(2024, 8, 31),
   * };
   * const inner: IDateTimeSpan = {
   *   from: new Date(2024, 8, 10),
   *   to: new Date(2024, 8, 15),
   * };
   *
   * // returns true
   * const contains = DateTime.spanContains(outer, inner);
   */
  static spanContains(outer: IDateTimeSpan, inner: IDateTimeSpan): boolean {
    const compareResultFrom = DateTime.compare(outer.from, inner.from);
    const compareResultTo = DateTime.compare(outer.to, inner.to);
    return compareResultFrom <= 0 && compareResultTo >= 0;
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
   * Subtracts the given {@link days} from {@link date} and returns a new date instance.
   */
  static subtractDays(date: Date, days: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() - days * this.msecInDays
    );
  }

  /**
   * Subtracts the given {@link hours} from {@link date} and returns a new date instance.
   */
  static subtractHours(date: Date, hours: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() - hours * this.msecInHours
    );
  }

  /**
   * Subtracts the given {@link milliseconds} from {@link date} and returns a new date instance.
   */
  static subtractMilliseconds(date: Date, milliseconds: number): Date {
    return new Date(this.toDateInstance(date).getTime() - milliseconds);
  }

  /**
   * Subtracts the given {@link minutes} from {@link date} and returns a new date instance.
   */
  static subtractMinutes(date: Date, minutes: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() - minutes * this.msecInMinutes
    );
  }

  /**
   * Subtracts the given {@link seconds} from {@link date} and returns a new date instance.
   */
  static subtractSeconds(date: Date, seconds: number): Date {
    return new Date(
      this.toDateInstance(date).getTime() - seconds * this.msecInSeconds
    );
  }

  /**
   * Extracts and returns the date of the given {@link date} in format yyyy-MM-dd
   */
  static toDate(date: Date): string {
    return this.format(date, "yyyy-MM-dd");
  }

  /**
   * Extracts and returns the days of the given {@link date}.
   */
  static toDay(date: Date): number {
    return this.toDateInstance(date).getDate();
  }

  /**
   * Extracts and returns the hours of the given {@link date}.
   */
  static toHours(date: Date): number {
    return this.toDateInstance(date).getHours();
  }

  /**
   * Extracts and returns the milliseconds of the given {@link date}.
   */
  static toMilliseconds(date: Date): number {
    return this.toDateInstance(date).getMilliseconds();
  }

  /**
   * Extracts and returns the minutes of the given {@link date}.
   */
  static toMinutes(date: Date): number {
    return this.toDateInstance(date).getMinutes();
  }

  /**
   * Extracts and returns the months of the given {@link date}.
   */
  static toMonth(date: Date): number {
    return this.toDateInstance(date).getMonth() + 1;
  }

  /**
   * Extracts and returns the seconds of the given {@link date}.
   */
  static toSeconds(date: Date): number {
    return this.toDateInstance(date).getSeconds();
  }

  /**
   * Extracts and returns the time of the given {@link date} in format hh:mm
   */
  static toTime(date: Date): string {
    return this.format(date, "hh:mm");
  }

  /**
   * Extracts and returns the weekday of the given {@link date}.
   */
  static toWeekday(date: Date): number {
    return this.toDateInstance(date).getDay();
  }

  /**
   * Extracts and returns the years of the given {@link date}.
   */
  static toYear(date: Date): number {
    return this.toDateInstance(date).getFullYear();
  }

  /**
   * Converts a {@link date} in format string like yyyy-mm-ddThh:mm:ss.msc to instance of Date or directly returns {@link date}.
   * This also converts a UTC date to a date of the local time
   */
  static toDateInstance(date: Date): Date {
    if (date instanceof Date) {
      return date;
    }
    return new Date(date);
  }
}

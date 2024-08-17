import { DateTime } from "./DateTime";

/**
 * This class is responsible for iterating from the given from date to the given to date
 */
export class DateTimeIterator {
  private cursor: Date;

  constructor(from: Date, private to: Date) {
    this.cursor = new Date(from);
  }

  hasNext(): boolean {
    return this.cursor <= this.to;
  }

  next(): Date {
    const current = new Date(this.cursor);
    this.cursor = DateTime.addDays(this.cursor, 1);
    return current;
  }

  /**
   * Iterates through all dates from the given {@link from} date to the given {@link to} date.
   */
  static iterate(from: Date, to: Date, handler: (current: Date) => void) {
    const dateTimeIterator = new DateTimeIterator(from, to);
    while (dateTimeIterator.hasNext()) {
      const current = dateTimeIterator.next();
      handler(current);
    }
  }
}

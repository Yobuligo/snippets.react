/**
 * This class is responsible for iterating from the given from date to the given to date
 */
export class DateTimeIterator {
  private cursor: Date;
  private to: Date;

  constructor(from: Date, to: Date) {
    this.cursor = new Date(
      Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
    );
    this.to = new Date(
      Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), to.getUTCDate())
    );
  }

  hasNext(): boolean {
    return this.cursor <= this.to;
  }

  next(): Date {
    const current = new Date(this.cursor);
    this.cursor.setUTCDate(this.cursor.getUTCDate() + 1);
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

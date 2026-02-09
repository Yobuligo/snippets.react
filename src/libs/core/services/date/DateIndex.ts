import { DateTime } from "./DateTime";

/**
 * Responsible for creating a map containing instances of {@link T} that is connected to a date.
 * Required e.g. for finding elements of a specific date.
 */
export class DateIndex<T> {
  private readonly map = new Map<string, T>();

  add(date: Date, object: T) {
    this.map.set(this.toKey(date), object);
  }

  delete(date: Date) {
    this.map.delete(this.toKey(date));
  }

  has(date: Date): boolean {
    return this.map.has(this.toKey(date));
  }

  get(date: Date): T | undefined {
    return this.map.get(this.toKey(date));
  }

  toKey(date: Date): string {
    return DateTime.toDate(date);
  }
}

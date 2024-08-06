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

  static subtract(later: Date, earlier: Date): Duration {
    const msec = later.getTime() - earlier.getTime();
    return new Duration(msec);
  }

  static formatDate(date: Date): string {
    const [year, month, day] = this.toDate(date).split("-");
    return `${day}.${month}.${year}`;
  }

  static toDate(date: Date): string {
    const [dateString] = date.toString().split("T");
    return dateString;
  }

  static toTime(date: Date): string {
    const [, timeString] = date.toString().split("T");
    return timeString;
  }

  static toDay(date: Date): string {
    const [, , day] = this.toDate(date).split("-");
    return day;
  }

  static toMonth(date: Date): string {
    const [, month] = this.toDate(date).split("-");
    return month;
  }

  static toYear(date: Date): string {
    const [year] = this.toDate(date).split("-");
    return year;
  }
}

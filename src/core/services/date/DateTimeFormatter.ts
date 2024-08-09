import { DateTime } from "./DateTime";

export class DateTimeFormatter {


  /**
   * Formats the given {@link date} to the required {@link pattern}.
   */
  format(date: Date, pattern: string): string {

    const localISOString = DateTime.toLocalISOString(date)
    const result = pattern;

    result.replace("yyyy", DateTime.toYear(date).toString())
    result.replace("MM", DateTime.toMonth(date).toString())

    return "";
  }
}

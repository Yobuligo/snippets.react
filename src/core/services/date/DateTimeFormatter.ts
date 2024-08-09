import { DateTime } from "./DateTime";

export class DateTimeFormatter {
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
    const [yyyy, MM, dd, hh, mm, ss, fff] = DateTime.disassemble(date);

    const replacements: { [key: string]: string } = {
      yyyy: yyyy.toString().padStart(4, "0"),
      yy: yyyy.toString().slice(-2).padStart(2, "0"),
      MM: MM.toString().padStart(2, "0"),
      M: MM.toString(),
      dd: dd.toString().padStart(2, "0"),
      d: dd.toString(),
      hh: hh.toString().padStart(2, "0"),
      h: hh.toString(),
      mm: mm.toString().padStart(2, "0"),
      m: mm.toString(),
      ss: ss.toString().padStart(2, "0"),
      s: ss.toString(),
      fff: fff.toString().padEnd(3, "0"),
      ff: fff.toString().slice(0, 2).padEnd(2, "0"),
      f: fff.toString().slice(0, 1).padEnd(1, "0"),
    };

    return pattern.replace(
      /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|fff|ff|f/g,
      (match) => replacements[match]
    );
  }
}

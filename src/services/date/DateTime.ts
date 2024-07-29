import { Todo } from "./../../core/utils/Todo";

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

  subtract() {
    // subtract a timestamp from another
    // subtract only specific seconds or hours, etc.
    Todo();
  }
}

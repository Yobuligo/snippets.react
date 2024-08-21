import { NoSuchElementError } from "../../errors/NoSuchElementError";
import { error } from "../../utils/error";

/**
 * This class is responsible for providing information about lists.
 */
export class List {
  /**
   * Returns *true* if the passed in *{@link element}* is part of the list. Otherwise it returns *false*.
   */
  static contains<T>(list: T[], element: T): boolean {
    return !this.containsNot(list, element);
  }

  /**
   * Returns *true* if all passed in *{@link elements}* are part of the list. Otherwise it returns *false*.
   */
  static containsAll<T>(list: T[], ...elements: T[]): boolean {
    if (this.isEmpty(list)) {
      return false;
    }

    for (const element of elements) {
      if (this.containsNot(list, element)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns *true* if the passed in *{@link element}* is not part of the list. Otherwise it returns *false*.
   */
  static containsNot<T>(list: T[], element: T): boolean {
    return this.isEmpty(list) || list.indexOf(element) === -1;
  }

  /**
   * Deletes all instances matching the given *{@link predicate}* from the *{@link list}* and returns *true*. Returns *false* if no element was deleted.
   */
  static delete<T>(list: T[], predicate: (element: T) => boolean): boolean {
    let writeIndex = 0;
    let found = false;

    for (let readIndex = 0; readIndex < list.length; readIndex++) {
      if (!predicate(list[readIndex])) {
        list[writeIndex] = list[readIndex];
        writeIndex++;
      } else {
        found = true;
      }
    }

    list.length = writeIndex;
    return found;
  }

  /**
   * Returns a newly created list, which contains all elements of the origin list except for duplicates.
   * Duplicates are identified by comparing the line type *{@link T}*, no matter if it is a scalar type or a reference type.
   */
  static distinct<T>(list: T[]): T[] {
    return Array.from(new Set(list));
  }

  /**
   * Returns the element at position *{@link index}* or throws a *{@link NoSuchElementException}* if *{@link index}* is not assigned.
   */
  static elementAt<T>(list: T[], index: number): T {
    return (
      this.elementAtOrNull(list, index) ??
      error(
        new NoSuchElementError(
          `Empty list does not contain element at index ${index}`
        )
      )
    );
  }

  /**
   * Returns the element at position *{@link index}* or returns *undefined* if *{@link index}* is not assigned.
   */
  static elementAtOrNull<T>(list: T[], index: number): T | undefined {
    if (this.isEmpty(list) || list[index] === undefined) {
      return undefined;
    }
    return list[index];
  }

  /**
   * Returns the first element of that list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  static first<T>(list: T[]): T {
    return (
      this.firstOrNull(list) ?? error(new NoSuchElementError("List is empty"))
    );
  }

  /**
   * Returns the first element of that list or returns *undefined* if the list is empty.
   */
  static firstOrNull<T>(list: T[]): T | undefined {
    return list[0];
  }

  /**
   * Returns *true* if the {@link list} is empty or *false* if the list contains at least one element.
   */
  static isEmpty<T>(list: T[]): boolean {
    return list.length === 0;
  }

  /**
   * Returns *true* if the list contains at least one element or *false* if the list is empty.
   */
  static isNotEmpty<T>(list: T[]): boolean {
    return !this.isEmpty(list);
  }

  /**
   * Returns the last element of that list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  static last<T>(list: T[]): T {
    return (
      this.lastOrNull(list) ?? error(new NoSuchElementError("List is empty"))
    );
  }

  /**
   * Returns the index of the last element in that list.
   */
  static lastIndex<T>(list: T[]): number {
    if (this.isEmpty(list)) {
      return -1;
    }
    return list.length - 1;
  }

  /**
   * Returns the last element of that list or returns *undefined* if the list is empty.
   */
  static lastOrNull<T>(list: T[]): T | undefined {
    if (this.isEmpty(list)) {
      return undefined;
    }
    return list[list.length - 1];
  }

  /**
   * Returns a random element from the list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  static random<T>(list: T[]): T {
    return (
      this.randomOrNull(list) ?? error(new NoSuchElementError("List is empty"))
    );
  }

  /**
   * Returns a random element from the list or returns *undefined* if the list is empty.
   */
  static randomOrNull<T>(list: T[]): T | undefined {
    const index = Math.floor(Math.random() * (this.lastIndex(list) + 1));
    return this.elementAtOrNull(list, index);
  }

  /**
   * Returns a newly created list, which contains all elements in a reversed order.
   * If the list is empty an empty list is returned.
   */
  static reversed<T>(list: T[]): T[] {
    const reversedList: T[] = [];
    for (let index = this.lastIndex(list); index >= 0; index--) {
      reversedList.push(list[index]);
    }
    return reversedList;
  }

  /**
   * Updates the first instance matching the given *{@link predicate}* from the *{@link list}* by *{@link element}*.
   */
  static update<T>(
    list: T[],
    element: T,
    predicate: (item: T) => boolean
  ) {
    const index = list.findIndex(predicate);
    if (index !== -1) {
      list.splice(index, 1, element);
    }
  }
}

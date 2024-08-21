/**
 * This class is responsible for providing information about lists.
 */
export class List {
  /**
   * Returns *true* if the {@link list} is empty or *false* if the list contains at least one element.
   */
  static isEmpty(list: Array<any>): boolean {
    return list.length === 0;
  }

  /**
   * Returns *true* if the list contains at least one element or *false* if the list is empty.
   */
  static isNotEmpty(list: Array<any>): boolean {
    return !this.isEmpty(list);
  }
}

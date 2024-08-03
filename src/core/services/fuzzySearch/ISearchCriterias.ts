/**
 * An implementation of this interface represents all search criteria which must match for a search.
 * Each compared value can reduce the number of required matches.
 * If all properties match, the method matches returns true.
 */
export interface ISeachCriterias {
  /**
   * Compares if the current {@link value} matches the search criterias.
   * Checks also if the {@link value} matches specific {@link propName} if keywords for specific props are provided.
   * Matched search criterias are marked as found. If all criterias match, the method match returns true.
   */
  compare(value: string, propName?: string): void;
  matches(): boolean;
}

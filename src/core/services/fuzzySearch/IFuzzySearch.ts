export interface IFuzzySearch<T> {
  search(query: string, items: T[] | undefined): T[];
}

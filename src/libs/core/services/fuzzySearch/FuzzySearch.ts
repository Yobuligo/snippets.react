import { isNotNull } from "../../utils/isNotNull";
import { IFuzzySearch } from "./IFuzzySearch";
import { IKeywords } from "./IKeywords";
import { ISeachCriterias } from "./ISearchCriterias";
import { SearchCriterias } from "./SearchCriterias";

export class FuzzySearch<T> implements IFuzzySearch<T> {
  /**
   * Finds all elements in list {@link items}, which fit the given {@link query}.
   * The properties to be searched can be restricted with {@link searchableProps}.
   */
  search(
    query: string,
    items: T[] | undefined,
    searchableProps?: (keyof T)[]
  ): T[] {
    if (query.length === 0) {
      return items ?? [];
    }
    const keywords = this.createKeywords(query);
    const resolvedSearchableProps = this.resolveSearchableProps(
      items,
      searchableProps
    );
    return (
      items?.filter((item) =>
        this.doesItemMatch(keywords, item, resolvedSearchableProps)
      ) ?? []
    );
  }

  private doesItemMatch(
    keywords: IKeywords,
    item: T,
    searchableProps: (keyof T)[]
  ) {
    const searchCriterias = new SearchCriterias(keywords);
    this.applySearchCriterias(searchCriterias, item, searchableProps);
    return searchCriterias.matches();
  }

  private applySearchCriterias(
    searchCriterias: ISeachCriterias,
    item: any,
    searchableProps: (keyof T)[],
    itemName?: string
  ) {
    if (searchCriterias.matches()) {
      return;
    }

    if (typeof item === "object") {
      for (const propName of searchableProps) {
        if (searchCriterias.matches()) {
          return;
        }
        const propValue = item[propName];
        if (isNotNull(propValue)) {
          this.applySearchCriterias(
            searchCriterias,
            propValue,
            searchableProps,
            propName.toString().toLowerCase()
          );
        }
      }
    } else if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        if (searchCriterias.matches()) {
          return;
        }
        this.applySearchCriterias(searchCriterias, item[i], searchableProps);
      }
    } else if (typeof item === "function") {
      return;
    } else {
      searchCriterias.compare(item.toString(), itemName);
    }
  }

  private createKeywords(query: string): IKeywords {
    const keywords: string[] = [];
    const propKeywords: Map<string, string> = new Map();

    query.split(" ").forEach((keyword) => {
      keyword = keyword.toLowerCase();
      if (keyword.includes(":")) {
        const [propName, propValue] = keyword.split(":");
        propKeywords.set(propName, propValue);
      } else {
        keywords.push(keyword);
      }
    });

    return { keywords, propKeywords };
  }

  /**
   * Returns the properties which will be searched for finding the query.
   * Either the given {@link searchableProps} or the searchableProps will be derived from a given entry from {@link items}.
   */
  private resolveSearchableProps(
    items?: T[],
    searchableProps?: (keyof T)[]
  ): (keyof T)[] {
    if (searchableProps) {
      return searchableProps;
    }

    return this.extractSearchablePropsFromItems(items);
  }

  /**
   * Extracts searchable properties from a given item list
   */
  private extractSearchablePropsFromItems(items?: T[]): (keyof T)[] {
    if (!items || items.length === 0) {
      return [];
    }

    const searchableProps: (keyof T)[] = [];
    for (const propName in items[0]) {
      searchableProps.push(propName);
    }
    return searchableProps;
  }
}

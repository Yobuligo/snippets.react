import { IFuzzySearch } from "./IFuzzySearch";
import { IKeywords } from "./IKeywords";
import { ISeachCriterias } from "./ISearchCriterias";
import { SearchCriterias } from "./SearchCriterias";

export class FuzzySearch<T> implements IFuzzySearch<T> {
  search(query: string, items: T[] | undefined): T[] {
    if (query.length === 0) {
      return items ?? [];
    }
    const keywords = this.createKeywords(query);
    return items?.filter((item) => this.doesItemMatch(keywords, item)) ?? [];
  }

  private doesItemMatch(keywords: IKeywords, item: T) {
    const searchCriterias = new SearchCriterias(keywords);
    this.applySearchCriterias(searchCriterias, item);
    return searchCriterias.matches();
  }

  private applySearchCriterias(
    searchCriterias: ISeachCriterias,
    item: any,
    itemName?: string
  ) {
    if (searchCriterias.matches()) {
      return;
    }

    if (typeof item === "object") {
      for (const propName in item) {
        if (searchCriterias.matches()) {
          return;
        }
        const propValue = item[propName];
        this.applySearchCriterias(
          searchCriterias,
          propValue,
          propName.toLowerCase()
        );
      }
    } else if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        if (searchCriterias.matches()) {
          return;
        }
        this.applySearchCriterias(searchCriterias, item[i]);
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
}

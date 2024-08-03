import { IKeywords } from "./IKeywords";
import { ISeachCriterias } from "./ISearchCriterias";

export class SearchCriterias implements ISeachCriterias {
  private keywords: IKeywords;

  constructor(keywords: IKeywords) {
    // always create a new array list, as the values will be removed
    this.keywords = {
      keywords: [...keywords.keywords],
      propKeywords: new Map(keywords.propKeywords),
    };
  }

  compare(value: string, propName?: string) {
    value = value.toLowerCase();
    this.compareKeywords(value);
    this.comparePropKeywords(value, propName);
  }

  /**
   * search for matches of keywords on value as long as we cannot find any further match
   * e.g. if value contains "Crystal Bridge" and we have the keywords ["crystal", "bridge"], that both keywords must be marked as found
   */
  private compareKeywords(value: string) {
    while (true) {
      const index = this.keywords.keywords.findIndex((keyword) =>
        value.includes(keyword)
      );

      // remove keyword from keywords if it matches
      if (index !== -1) {
        this.keywords.keywords.splice(index, 1);
      } else {
        break;
      }
    }
  }

  private comparePropKeywords(value: string, propName?: string) {
    if (!propName || this.keywords.propKeywords.size === 0) {
      return;
    }

    // find keyword by property name
    const propValue = this.keywords.propKeywords.get(propName);

    // if propName must match and value contains propValue, reduce propKeywords
    if (propValue && value.includes(propValue)) {
      this.keywords.propKeywords.delete(propName);
    }
  }

  matches(): boolean {
    return (
      this.keywords.keywords.length === 0 &&
      this.keywords.propKeywords.size === 0
    );
  }

  // private checkMatchesKeyword()
}

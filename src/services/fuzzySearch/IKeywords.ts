export interface IKeywords {
  /**
   * Contains simple keywords, which must match directly
   */
  keywords: string[];

  /**
   * Contains specific keywords, which must match for a specific property (like: client:100)
   */
  propKeywords: Map<string, string>;
}

/**
 * Represents possible route hash parameters.
 *
 * @example
 * ```
 *  const queryParams: QueryParams = {
 *    bank: "bank",
 *    invoice: "invoice",
 *  }; // required for a route like /<route>#bank
 * ```
 */
export type HashParams = Record<string, string>;

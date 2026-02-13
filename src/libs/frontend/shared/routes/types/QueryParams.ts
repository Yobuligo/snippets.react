/**
 * Represents possible route query parameters.
 *
 * @example
 * ```
 *  const queryParams: QueryParams = {
 *    firstname: "firstname",
 *    lastname: "lastname",
 *  }; // required for a route /<route>?firstname=Stacey&lastname=Starfish
 * ```
 */
export type QueryParams = Record<string, string>;

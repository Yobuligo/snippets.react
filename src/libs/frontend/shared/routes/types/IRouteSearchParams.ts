import { HashParams } from "./HashParams";
import { QueryParams } from "./QueryParams";

/**
 * Provides additional route search hash and query parameters.
 */
export interface IRouteSearchParams<
  THashParams extends HashParams,
  TQueryParams extends QueryParams,
> {
  /**
   * Provides possible route hash parameters.
   *
   * @example
   * ```
   *  const hashParams: HashParams = {
   *    bank: "bank",
   *    invoice: "invoice",
   *  }; // required for a route like /<route>#bank
   * ```
   */
  readonly hash?: THashParams;

  /**
   * Provides possible route query parameters.
   *
   * @example
   * ```
   *  const queryParams: QueryParams = {
   *    firstname: "firstname",
   *    lastname: "lastname",
   *  }; // required for a route /<route>?firstname=Stacey&lastname=Starfish
   * ```
   */
  readonly query?: TQueryParams;
}

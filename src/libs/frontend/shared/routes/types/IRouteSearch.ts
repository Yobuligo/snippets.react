import { HashParams } from "./HashParams";
import { QueryParams } from "./QueryParams";
import { QuerySearch } from "./QuerySearch";

/**
 * Extend route by specific search params.
 */
export interface IRouteSearch<
  THashParams extends HashParams,
  TQueryParams extends QueryParams,
> {
  /**
   * Adds the given hash to the route.
   */
  readonly hash?: keyof THashParams;

  /**
   * Adds the given query values to the route.
   */
  readonly query?: QuerySearch<TQueryParams>;
}

import { HashParams } from "./HashParams";
import { IRoute } from "./IRoute";
import { IRouteSearch } from "./IRouteSearch";
import { IRouteSearchParams } from "./IRouteSearchParams";
import { QueryParams } from "./QueryParams";

/**
 * An implementation of this interface represents a route which is static, which means it has no parameters.
 *
 * @example
 * /persons
 */
export interface IStaticRoute<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
  TRouteSearch extends IRouteSearch<HashParams, QueryParams>,
> extends IRoute<TPath, TRouteSearchParams> {
  /**
   * Returns the path of this route.
   */
  toPath(search?: TRouteSearch): string;
}

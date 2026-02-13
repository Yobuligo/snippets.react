import { HashParams } from "./HashParams";
import { IRoute } from "./IRoute";
import { IRouteSearch } from "./IRouteSearch";
import { IRouteSearchParams } from "./IRouteSearchParams";
import { QueryParams } from "./QueryParams";
import { RouteParams } from "./RouteParams";

/**
 * An implementation of this interface represents a route which has parameters.
 *
 * @example
 * /persons/:personId
 */
export interface IParamRoute<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
  TRouteSearch extends IRouteSearch<HashParams, QueryParams>,
> extends IRoute<TPath, TRouteSearchParams> {
  /**
   * Returns the path of this route filled by the given {@link params}.
   */
  toPath<TParams extends RouteParams<TPath>>(
    params: TParams,
    search?: TRouteSearch,
  ): string;
}

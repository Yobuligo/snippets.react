import { HashParams } from "./HashParams";
import { IRouteSearchParams } from "./IRouteSearchParams";
import { QueryParams } from "./QueryParams";

/**
 * An implementation of this interface represents any route.
 */
export interface IRoute<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
> {
  /**
   * Returns the origin path of this route, which might contain placeholders, which are not replaced by values yet.
   */
  readonly origin: TPath;

  /**
   * Provides additional route search hash and query parameters.
   */
  readonly searchParams: TRouteSearchParams;
}

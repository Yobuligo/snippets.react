import { IRoute } from "./IRoute";
import { RouteParams } from "./RouteParams";

/**
 * An implementation of this interface represents a route which has parameters.
 *
 * @example
 * /persons/:personId
 */
export interface IParamRoute<TPath extends string> extends IRoute<TPath> {
  /**
   * Returns the path of this route filled by the given {@link params}.
   */
  toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
}

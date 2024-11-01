import { IRoute } from "./IRoute";

/**
 * An implementation of this interface represents a static route for path {@link TPath}. A static route contains no parameters.
 *
 * @example
 * /persons
 */
export interface IStaticRoute<TPath extends string> extends IRoute<TPath> {
  /**
   * Returns the path of this route.
   */
  toPath(): string;
}

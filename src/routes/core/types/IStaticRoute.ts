import { IRoute } from "./IRoute";

/**
 * An implementation of this interface represents a route which is static, which means it has no parameters.
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

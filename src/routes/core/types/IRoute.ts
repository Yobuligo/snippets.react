/**
 * An implementation of this interface represents any route.
 */
export interface IRoute<TPath extends string> {
  /**
   * Returns the origin path of this route, which might contain placeholders, which are not replaced by values yet.
   */
  readonly origin: TPath;
}

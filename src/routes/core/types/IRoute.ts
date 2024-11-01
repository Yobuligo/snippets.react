/**
 * An implementation of this interface represents any route. A route is expressed by a string like:
 * - /project
 * - /project/:projectId
 */
export interface IRoute<TPath extends string> {
  /**
   * Returns the original route including placeholders like :id if available.
   */
  readonly origin: TPath;
}

import { IRoute } from "./IRoute";
import { RouteParams } from "./RouteParams";

/**
 * An implementation of this interface represents a route for path {@link TPath} that contains parameter(s)
 *
 * @example
 * /project/:projectId
 * /project/:projectId/system/:systemId
 */
export interface IParamRoute<TPath extends string> extends IRoute<TPath> {
  /**
   * Returns the path {@link TPath} of this route, whose parameters are filled by the given {@link params} values.
   */
  toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
}

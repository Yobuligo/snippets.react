import { IRoute } from "./IRoute";
import { RouteParams } from "./RouteParams";

export interface IParamRoute<TPath extends string> extends IRoute<TPath> {
  /**
   * Returns the path filled by the given {@link params}.
   */
  toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
}

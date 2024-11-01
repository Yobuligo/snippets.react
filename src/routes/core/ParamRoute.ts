import { IParamRoute } from "./types/IParamRoute";
import { RouteParams } from "./types/RouteParams";

/**
 * This class represents a route having parameter(s).
 */
export class ParamRoute<TPath extends string> implements IParamRoute<TPath> {
  constructor(readonly origin: TPath) {}

  /**
   * This method converts the origin {@link TPath} to a path whose parameters are filled by {@link params} values and returns it.
   */
  toPath<TParams extends RouteParams<TPath>>(params: TParams): string {
    let path: string = this.origin;
    for (const propName in params) {
      path = path.replaceAll(`:${propName}`, params[propName]);
    }
    return path;
  }
}

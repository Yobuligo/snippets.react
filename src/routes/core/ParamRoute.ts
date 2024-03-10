import { IParamRoute } from "./types/IParamRoute";
import { RouteParams } from "./types/RouteParams";

export class ParamRoute<TPath extends string> implements IParamRoute<TPath> {
  constructor(readonly origin: TPath) {}

  /**
   * This methods converts the origin path by filling placeholders, which starts with a colon
   */
  toPath<TParams extends RouteParams<TPath>>(params: TParams): string {
    let path: string = this.origin;
    for (const propName in params) {
      path = path.replaceAll(`:${propName}`, params[propName]);
    }
    return path;
  }
}

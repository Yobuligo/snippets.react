import { RouteSearchMapper } from "./services/RouteSearchMapper";
import { HashParams } from "./types/HashParams";
import { IParamRoute } from "./types/IParamRoute";
import { IRouteSearch } from "./types/IRouteSearch";
import { IRouteSearchParams } from "./types/IRouteSearchParams";
import { QueryParams } from "./types/QueryParams";
import { RouteParams } from "./types/RouteParams";

export class ParamRoute<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
  TRouteSearch extends IRouteSearch<HashParams, QueryParams>,
> implements IParamRoute<TPath, TRouteSearchParams, TRouteSearch> {
  constructor(
    readonly origin: TPath,
    readonly searchParams: TRouteSearchParams,
  ) {}

  /**
   * This methods converts the origin path by filling placeholders, which starts with a colon
   */
  toPath<TParams extends RouteParams<TPath>>(
    params: TParams,
    search?: TRouteSearch,
  ): string {
    let path: string = this.origin;
    for (const propName in params) {
      path = path.replaceAll(`:${propName}`, params[propName]);
    }

    const fullPath = new RouteSearchMapper(
      this.searchParams,
      search,
    ).fromPathToString(path);
    return fullPath;
  }
}

import { RouteSearchMapper } from "./services/RouteSearchMapper";
import { HashParams } from "./types/HashParams";
import { IRouteSearch } from "./types/IRouteSearch";
import { IRouteSearchParams } from "./types/IRouteSearchParams";
import { IStaticRoute } from "./types/IStaticRoute";
import { QueryParams } from "./types/QueryParams";

export class StaticRoute<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
  TRouteSearch extends IRouteSearch<HashParams, QueryParams>,
> implements IStaticRoute<TPath, TRouteSearchParams, TRouteSearch> {
  constructor(
    readonly origin: TPath,
    readonly searchParams: TRouteSearchParams,
  ) {}

  toPath(search?: TRouteSearch): string {
    const fullPath = new RouteSearchMapper(
      this.searchParams,
      search,
    ).fromPathToString(this.origin);
    return fullPath;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashParams } from "./HashParams";
import { IParamRoute } from "./IParamRoute";
import { IRouteSearch } from "./IRouteSearch";
import { IRouteSearchParams } from "./IRouteSearchParams";
import { IStaticRoute } from "./IStaticRoute";
import { QueryParams } from "./QueryParams";

/**
 * This type represents any route type, static or with parameters
 */
export type RouteType<
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams>,
  TRouteSearch extends IRouteSearch<any, any>,
> = TPath extends `${infer _Prefix}:${infer _Param}${infer _Suffix}`
  ? IParamRoute<TPath, TRouteSearchParams, TRouteSearch>
  : IStaticRoute<TPath, TRouteSearchParams, TRouteSearch>;

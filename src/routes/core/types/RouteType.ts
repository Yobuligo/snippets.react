/* eslint-disable @typescript-eslint/no-unused-vars */
import { IParamRoute } from "./IParamRoute";
import { IStaticRoute } from "./IStaticRoute";

/**
 * This type represents the route type {@link IStaticRoute} if the given {@link TPath} contains no parameters,
 * otherwise {@link IParamRoute} if {@link TPath} contains parameters.
 */
export type RouteType<TPath extends string> =
  TPath extends `${infer _Prefix}:${infer _Param}${infer _Suffix}`
    ? IParamRoute<TPath>
    : IStaticRoute<TPath>;

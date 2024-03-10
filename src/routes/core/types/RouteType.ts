/* eslint-disable @typescript-eslint/no-unused-vars */
import { IParamRoute } from "./IParamRoute";
import { IStaticRoute } from "./IStaticRoute";

/**
 * This type represents any route type, static or with parameters
 */
export type RouteType<TPath extends string> =
  TPath extends `${infer _Prefix}:${infer _Param}${infer _Suffix}`
    ? IParamRoute<TPath>
    : IStaticRoute<TPath>;

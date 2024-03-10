import { ParamRoute } from "./ParamRoute";
import { StaticRoute } from "./StaticRoute";
import { RouteType } from "./types/RouteType";

/**
 * This function creates a new route with the given {@link path}.
 *
 * Depended on if the path is static or contains parameters, it returns an instance of {@link StaticRoute} or {@link ParamRoute}.
 */
export const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
  if (path.includes(":")) {
    return new ParamRoute(path) as RouteType<TPath>;
  } else {
    return new StaticRoute(path) as RouteType<TPath>;
  }
};

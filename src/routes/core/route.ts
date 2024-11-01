import { ParamRoute } from "./ParamRoute";
import { StaticRoute } from "./StaticRoute";
import { RouteType } from "./types/RouteType";

/**
 * This function is responsible for creating instances of type {@link IRoute}.
 * If the given {@link path} contains no parameters it creates a route of type {@link IStaticRoute}, otherwise {@link IParamRoute}.
 */
export const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
  if (path.includes(":")) {
    return new ParamRoute(path) as RouteType<TPath>;
  } else {
    return new StaticRoute(path) as RouteType<TPath>;
  }
};

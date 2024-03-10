import { ParamRoute } from "./ParamRoute";
import { RouteType } from "./types/RouteType";
import { StaticRoute } from "./StaticRoute";

export const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
  if (path.includes(":")) {
    return new ParamRoute(path) as RouteType<TPath>;
  } else {
    return new StaticRoute(path) as RouteType<TPath>;
  }
};

import { RouteConfig } from "./types/RouteConfig";

/**
 * This function is responsible for providing the routes for this app in a type safe way.
 */
export const configureRoutes = <TRouteConfig extends RouteConfig>(
  config: TRouteConfig
): TRouteConfig => {
  return config;
};

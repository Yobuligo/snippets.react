import { RoutesConfig } from "./types/RoutesConfig";

/**
 * This function is responsible for providing the routes for this app in a type safe way.
 */
export const configureRoutes = <TRouteConfig extends RoutesConfig>(
  config: TRouteConfig
): TRouteConfig => {
  return config;
};

import { RouteConfig } from "./types/RouteConfig";

/**
 * This function is required to create an object using the given {@link config} which contains routes of type {@link IRoute}.
 * This config can be used to access the routes in a typesafe way.
 * The goal is to have the route paths defined as literals only at one central point, this config.
 */
export const configureRoutes = <TRouteConfig extends RouteConfig>(
  config: TRouteConfig
): TRouteConfig => {
  return config;
};

import { RoutesConfig } from "./types/RoutesConfig";

export const configureRoutes = <TRouteConfig extends RoutesConfig>(
  config: TRouteConfig
): TRouteConfig => {
  return config;
};

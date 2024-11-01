import { IRoute } from "./IRoute";

/**
 * This type represents an object type that can contain of routes of type {@link IRoute}.
 * It is used to define routes in a typesafe way.
 */
export type RouteConfig = { [key: string]: IRoute<any> };

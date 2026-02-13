import { ParamRoute } from "./ParamRoute";
import { StaticRoute } from "./StaticRoute";
import { HashParams } from "./types/HashParams";
import { IRouteSearch } from "./types/IRouteSearch";
import { IRouteSearchParams } from "./types/IRouteSearchParams";
import { QueryParams } from "./types/QueryParams";
import { RouteType } from "./types/RouteType";

/**
 * Infers type of prop hash from the given {@link T}.
 */
type InferHash<T> = T extends { hash?: infer THash extends HashParams }
  ? THash
  : {};

/**
 * Infers type of prop query from the given {@link T}.
 */
type InferQuery<T> = T extends { query?: infer TQuery extends QueryParams }
  ? TQuery
  : {};

/**
 * This function creates a new route with the given {@link path}.
 *
 * Depended on if the path is static or contains parameters, it returns an instance of {@link StaticRoute} or {@link ParamRoute}.
 *
 * In addition {@link searchParams} can be set to provide possible hash or query params.
 *
 * @example
 * ```
 *   const AppRoutes = configureRoutes({
 *     articles: route("/articles"),
 *     article: route("/article/:id"),
 *     user: route("/user/:id", {
 *       hash: {
 *         address: "address",
 *         generalInformation: "general",
 *       },
 *       query: {
 *         firstname: "firstname",
 *       },
 *     }),
 *   });
 *
 *   // Provides path /articles
 *   AppRoutes.articles.toPath();
 *
 *   // Provides path /article/123
 *   AppRoutes.article.toPath({ id: "123" });
 *
 *   // Provides path /user/123?firstname=Stacey
 *   AppRoutes.user.toPath({ id: "123" }, { query: { firstname: "Stacey" } });
 *
 *   // navigates to /user/123?firstname=Stacey#general
 *   AppRoutes.user.toPath(
 *     { id: "123" },
 *     { hash: "generalInformation", query: { firstname: "Stacey" } },
 *   );
 * ```
 */
export const route = <
  TPath extends string,
  TRouteSearchParams extends IRouteSearchParams<HashParams, QueryParams> = {},
>(
  path: TPath,
  searchParams?: TRouteSearchParams,
): RouteType<
  TPath,
  TRouteSearchParams,
  IRouteSearch<InferHash<TRouteSearchParams>, InferQuery<TRouteSearchParams>>
> => {
  if (path.includes(":")) {
    return new ParamRoute(path, searchParams ?? {}) as RouteType<
      TPath,
      TRouteSearchParams,
      IRouteSearch<
        InferHash<TRouteSearchParams>,
        InferQuery<TRouteSearchParams>
      >
    >;
  } else {
    return new StaticRoute(path, searchParams ?? {}) as RouteType<
      TPath,
      TRouteSearchParams,
      IRouteSearch<
        InferHash<TRouteSearchParams>,
        InferQuery<TRouteSearchParams>
      >
    >;
  }
};

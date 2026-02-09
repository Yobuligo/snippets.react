/**
 * Responsible for resolving a given path e.g. by adding a prefix.
 *
 * @example
 * /users/:id -> /tenants/:tenantId/users/:id
 */
export interface IRouteResolver {
  /**
   * Returns a resolved variant of the given {@link path}.
   *
   * @example
   * // Add prefix /tenants/:tenantId to path
   * /users/:id -> /tenants/:tenantId/users/:id
   */
  resolve(path: string): string;
}

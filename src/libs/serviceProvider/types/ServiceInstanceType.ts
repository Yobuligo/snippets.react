/**
 * This enum represents the instance types which a service can have.
 */
export enum ServiceInstanceType {
  /**
   * Single instantiable services exists only once and the same instance is returned for each request.
   */
  SINGLE_INSTANTIABLE,

  /**
   * Multi instantiable services exists multiple times and a new instance is created for each request.
   */
  MULTI_INSTANTIABLE,
}

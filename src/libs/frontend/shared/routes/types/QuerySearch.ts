import { QueryParams } from "./QueryParams";

/**
 * Provides query parameter values.
 *
 * @example
 * ```
 *   // path?firstname=Stacey&lastname=Starfish
 * ```
 */
export type QuerySearch<T extends QueryParams> = { [K in keyof T]?: string };

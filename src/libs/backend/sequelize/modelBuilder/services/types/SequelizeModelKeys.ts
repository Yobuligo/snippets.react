/**
 * Returns a type containing the given model keys of {@link T} as name and value.
 */
export type SequelizeModelKeys<T> = { [K in keyof Required<T>]: string };

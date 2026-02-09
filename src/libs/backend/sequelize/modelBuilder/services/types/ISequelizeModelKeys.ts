import { SequelizeModelKeys } from "./SequelizeModelKeys";

/**
 * Returns an object containing the given model keys of {@link T} as name and value.
 */
export type ISequelizeModelKeys<T> = {
  keys: SequelizeModelKeys<T>;
};

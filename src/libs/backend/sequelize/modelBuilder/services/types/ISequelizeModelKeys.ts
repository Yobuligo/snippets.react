import { SequelizeModelKeys } from "./SequelizeModelKeys";

/**
 * Returns an object containing the given model keys of {@link T} as name and value.
 */
export type ISequelizeModelKeys<T> = {
  /**
   * Returns the keys as object with key value pairs, while the value is the name of the key.
   */
  readonly keys: SequelizeModelKeys<T>;

  /**
   * Returns all keys of {@link T} as key list.
   */
  readonly keyList: (keyof T)[];
};

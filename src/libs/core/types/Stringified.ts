/**
 * Returns a new type of {@link T} with all properties as string.
 */
export type Stringified<T> = {
  [K in keyof T]: T[K] extends boolean
    ? string
    : T[K] extends object
    ? Stringified<T[K]>
    : string;
};

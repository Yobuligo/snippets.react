/**
 * Calls the given {@link block} if the given {@link value} is not null and not undefined.
 * The function {@link block} may return a value or undefined.
 */
export const ifNotNull = <T, R>(
  value: T,
  block: (value: NonNullable<T>) => R | undefined,
): R | undefined => {
  if (value !== undefined && value !== null) {
    return block(value);
  }
};

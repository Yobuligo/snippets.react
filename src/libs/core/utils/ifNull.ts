/**
 * Calls the given {@link block} if the given {@link value} is null or undefined.
 * The function {@link block} may return a value or undefined.
 */
export const ifNull = <T, R>(
  value: T,
  block: () => R | undefined,
): R | undefined => {
  if (value === undefined || value === null) {
    return block();
  }
};

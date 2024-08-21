/**
 * Throws an error and returns never. With parameter {@link message} a text can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error("Message");
 */
export function error(message?: string): never;

/**
 * Throws an error and returns never. With parameter {@link error} an alternative exception type can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error(new IllegalStateException());
 */
export function error(error: Error): never;
export function error(first: unknown | undefined): never {
  if (first === undefined) {
    throw new Error();
  }

  if (typeof first === "string") {
    throw new Error(first);
  }

  throw first;
}

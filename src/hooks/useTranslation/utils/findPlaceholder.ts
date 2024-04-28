/**
 * Finds a placeholder from {@link placeholders} by a {@link placeholderName}.
 * Returns undefined if no placeholder with {@link placeholderName} exists.
 */
export const findPlaceholder = <T extends object>(
  placeholders: T,
  placeholderName: string
) => {
  for (const propName in placeholders) {
    if (propName === placeholderName) {
      return placeholders[propName];
    }
  }
  return undefined;
};

/**
 * Returns {@link text} filled with all given literal {@link placeholders}.
 */
export const fillTextPlaceholders = <T>(
  text: string,
  placeholders: T
): string => {
  for (const propName in placeholders) {
    const value = placeholders[propName];
    text = text.replaceAll(`{{${propName}}}`, value as string);
  }
  return text;
};

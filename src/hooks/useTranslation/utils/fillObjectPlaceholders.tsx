import { findPlaceholder } from "./findPlaceholder";

/**
 * Returns the given {@link text} wrapped as a JSX.Element filled with all given {@link placeholders} including objects.
 */
export function fillObjectPlaceholders<T extends object>(
  text: string,
  placeholders: T
): JSX.Element {
  // Split text at {{placeholder}}
  const texts = text.split(/({{.*?}})/);

  // wrap text elements by fragment
  // if text is a placeholder, find the placeholder and set it instead of the text
  const items = texts.map((text) => {
    const placeholder = findPlaceholder(placeholders, text);
    return <>{placeholder ? placeholder : text}</>;
  });

  // return combined element
  return <div>{items}</div>;
}

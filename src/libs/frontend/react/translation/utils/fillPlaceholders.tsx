import { PlaceholderText } from "../components/PlaceholderText";
import { containsObjectProp } from "./containsObjectProp";
import { fillTextPlaceholders } from "./fillTextPlaceholders";

/**
 * Returns the given {@link text} filled with all given {@link placeholders}.
 * If the placeholders are just text, the placeholders would be replaced by the corresponding text and a string is returned.
 * If at least one placeholder is of type object, the result is a JSX.Element, which wraps the text by fragments.
 */
export const fillPlaceholders = <T extends object>(
  text: string,
  placeholders: T
): T[keyof T] => {
  // check if placeholders contains a property of type object
  // if so, it has to be wrapped by a component, so we cannot return a simple string, but a JSX.Element
  if (containsObjectProp(placeholders)) {
    return (
      <PlaceholderText placeholders={placeholders} text={text} />
    ) as T[keyof T];
  }

  return fillTextPlaceholders(text, placeholders) as T[keyof T];
};

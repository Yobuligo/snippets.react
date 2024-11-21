import { ReactNode, isValidElement } from "react";
import { isPlaceholderExpression } from "./isPlaceholderExpression";
import { toPlaceholderExpression } from "./toPlaceholderExpression";

/**
 * Finds a placeholder from {@link placeholders} by a {@link text}.
 * Returns undefined if no placeholder with {@link text} exists.
 */
export function findObjectPlaceholder<T extends object>(
  placeholders: T,
  text: string
): ReactNode | undefined {
  if (isPlaceholderExpression(text)) {
    for (const propName in placeholders) {
      if (toPlaceholderExpression(propName) === text) {
        const placeholder = placeholders[propName];
        if (isValidElement(placeholder)) {
          return placeholder;
        }
        throw new Error(
          `Error while converting placeholder to ReactNode. Placeholder is no ReactNode.`
        );
      }
    }
  }
  return undefined;
}

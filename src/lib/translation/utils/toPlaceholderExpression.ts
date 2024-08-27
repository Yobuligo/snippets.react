/**
 * Converts a given {@link text} to a placeholder expression.
 *
 * @example
 * text = "link" -> text = "{{link}}"
 */
export function toPlaceholderExpression(text: string): string {
  return `{{${text}}}`;
}

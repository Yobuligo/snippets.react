/**
 * Returns if the given {@link text} is a placeholder expression.
 *
 * @example
 * text = {{link}}
 */
export function isPlaceholderExpression(text: string): boolean {
  return text.startsWith("{{");
}

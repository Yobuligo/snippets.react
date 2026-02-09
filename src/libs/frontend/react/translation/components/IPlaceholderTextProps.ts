export interface IPlaceholderTextProps {
  /**
   * Text with placeholders in form of {{<placeholder-name>}}
   */
  text: string;

  /**
   * Contains the placeholders, which should be set in the {@link text}.
   */
  placeholders: object;
}

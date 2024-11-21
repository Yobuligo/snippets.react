// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { texts } from "../texts";
import { Placeholder } from "./Placeholder";

/**
 * An implementation of this interface represents a translation, which can be transferred between functions and classes.
 * It contains of a {@link text}, which should be a key of {@link texts}
 * and it can contain placeholders, which should be replaced in {@link text}.
 *
 * @example
 * const translation: Translation<{ name: string }> = {
 *   text: texts.hello,
 *   placeholders: { name: "John" },
 * };
 */
export interface ITranslation {
  text: string;
  placeholders?: Placeholder;
}

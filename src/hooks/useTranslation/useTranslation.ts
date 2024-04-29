import * as translations from "./i18n";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { texts } from "./texts";
import { ITranslation } from "./types/ITranslation";
import { Placeholder } from "./types/Placeholder";
import { fillPlaceholders } from "./utils/fillPlaceholders";

/**
 * This custom hook is responsible for providing access to translatable texts of the selected language.
 * The texts are defined in folder 'i18n'. They can be addressed via constant {@link texts}.
 * It can be used as follows:
 *
 * @example
 * const { t } = useTranslation()
 * t(texts.myTextReference)
 *
 * // Placeholders can be provided as second parameter
 * // The placeholder in the corresponding text definition must be defined as e.g. "myTextReference": "Hello {{name}}"
 * t(texts.myTextReference, { name: "John" })
 *
 */
export const useTranslation = () => {
  const language = "en";

  const getTranslations = <T extends Placeholder>(
    keys: string[],
    placeholders?: T
  ) => {
    let text = keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);

    if (placeholders) {
      text = fillPlaceholders(text, placeholders);
    }

    return text;
  };

  /**
   * Returns the text with the given {@link key}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   * }
   *
   * t(texts.demo);
   */
  function t(key: string): string;

  /**
   * Returns the text with the given {@link key} and {@link placeholders}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}}"
   * }
   *
   * t(texts.demo);
   * t(texts.demo, { firstname: "Stacey" });
   */
  function t<T extends Placeholder>(key: string, placeholders: T): T[keyof T];

  /**
   * Returns the text from the given {@link translation}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}}"
   * }
   *
   * const translation: ITranslation = {
   *   text: texts.demo,
   *   placeholders: { firstname: "Stacey" },
   * };
   * t(translation);
   */
  function t<T = string>(translation: ITranslation): T;
  function t<T = string>(first: unknown, second?: unknown): T {
    if (typeof first === "string") {
      const keySegments = first.split(".");
      return getTranslations(keySegments, second as any);
    }

    const translation = first as ITranslation;
    const keySegments = translation.text.split(".");
    return getTranslations(keySegments, translation.placeholders);
  }

  return { t };
};

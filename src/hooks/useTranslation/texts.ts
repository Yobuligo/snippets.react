import * as translations from "./i18n";

/**
 * This function is responsible for setting the path for each text instead of having the text itself.
 * E.g.
 *    {
 *      settings: {
 *          title: "My title"
 *      }
 *    }
 *
 * becomes
 *    {
 *      settings: {
 *          title: "settings.title"
 *      }
 *    }
 */
const fillPath = (source: object, path: string) => {
  const prefix = path ? `${path}.` : "";
  const target = {};
  for (const propName in source) {
    const propValue = (source as any)[propName];
    if (typeof propValue !== "object") {
      (target as any)[propName] = `${prefix}${propName}`;
    } else {
      const prefixSubObject = prefix ? `${prefix}${propName}` : propName;
      (target as any)[propName] = fillPath(
        (source as any)[propName],
        prefixSubObject
      );
    }
  }
  return target;
};

/**
 * This function is responsible for creating the text object. It has the correct structure, like the translation files but each property just contains the path of itself, instead of a text.
 * In addition we ensure that english is the leading language. So whenever another language is not provided, we have a fallback.
 * On the other hand this means, if a text is not available in english, we cannot use it.
 */
const createTextObject = () => {
  const texts: (typeof translations)["en"] = fillPath(
    translations["en"],
    ""
  ) as any;
  return texts;
};

/**
 * This variable is required to access the texts
 */
export const texts: (typeof translations)["en"] = createTextObject();

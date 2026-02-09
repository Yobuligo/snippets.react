import { ExtractModelAttr } from "../types/ExtractModelAttr";
import { IDBModel } from "../types/IDBModel";

/**
 * Extracts and returns the selected {@link key} from the given {@link model}.
 * Required for type safety, instead of providing the key as pure string, which won't be recognized as wrong in case of a change.
 */
export const getModelAttrKey = <T extends IDBModel>(
  model: T,
  key: keyof ExtractModelAttr<T>,
): string => {
  return key.toString();
};

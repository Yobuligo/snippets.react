import { Value } from "../core/types/Value";
import { Language } from "../hooks/useLanguage/types/Language";

export interface IAppContext {
  language: Value<Language>;
}

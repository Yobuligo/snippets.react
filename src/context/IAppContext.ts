import { Value } from "../core/types/Value";
import { Language } from "../lib/language/types/Language";

export interface IAppContext {
  language: Value<Language>;
}

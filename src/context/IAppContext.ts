import { Value } from "../core/types/Value";
import { Language } from "../libs/language/types/Language";

export interface IAppContext {
  language: Value<Language>;
}

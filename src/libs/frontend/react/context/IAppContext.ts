import { Value } from "../core/types/Value";
import { Language } from "../language/types/Language";


export interface IAppContext {
  language: Value<Language>;
}

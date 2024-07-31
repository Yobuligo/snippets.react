import { Value } from "../../core/types/Value";
import { useLocalStorage } from "../useLocalStorage";
import { Language } from "./types/Language";

export const useLanguageStorage = (): Value<Language> => {
  const [language, setLanguage] = useLocalStorage("language", Language.EN);
  return [language, setLanguage];
};

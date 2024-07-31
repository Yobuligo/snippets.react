import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Value } from "../../core/types/Value";
import { Language } from "./types/Language";

export const useLanguage = (): Value<Language> => {
  const context = useContext(AppContext);
  return context.language;
};

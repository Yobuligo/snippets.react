import { useMemo } from "react";
import { Language } from "../../hooks/useLanguage/types/Language";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";
import { ISelectOption } from "../select/ISelectOption";
import { Select } from "../select/Select";

export const LanguageSelect: React.FC = () => {
  const [language, setLanguage] = useLanguage();

  const languageOptions = useMemo<ISelectOption<Language>[]>(
    () => [
      { key: Language.DE, text: "Deutsch" },
      { key: Language.EN, text: "English" },
    ],
    []
  );

  const selectedLanguageOption = languageOptions.find(
    (languageOption) => languageOption.key === language
  );

  const onSelect = (option: ISelectOption<Language>) => setLanguage(option.key);

  return (
    <Select
      onSelect={onSelect}
      options={languageOptions}
      selected={selectedLanguageOption}
    />
  );
};

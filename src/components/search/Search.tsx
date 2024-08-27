import { useState } from "react";
import { texts } from "../../lib/translation/texts";
import { useTranslation } from "../../lib/translation/useTranslation";
import { SearchIcon } from "../../icons/SearchIcon";
import { ISearchProps } from "./ISearchProps";
import styles from "./Search.module.scss";

export const Search: React.FC<ISearchProps> = (props) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState(props.query ?? "");

  const onSearch = () => props.onSearch?.(query);

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={onChange}
        onKeyDown={onEnter}
        placeholder={t(texts.search)}
        type="text"
        value={query}
      />
      <button>
        <SearchIcon onClick={onSearch} />
      </button>
    </div>
  );
};

import { useState } from "react";
import { ISelectOption } from "./ISelectOption";
import { ISelectProps } from "./ISelectProps";
import { findByText } from "./utils/findByText";
import styles from "./Select.module.scss";
import { style } from "../../core/utils/style";

export function Select<T extends ISelectOption>(props: ISelectProps<T>) {
  const [selected, setSelected] = useState(props.selected);

  const items = props.options.map((option) => (
    <option key={option.key}>{option.text}</option>
  ));

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = findByText(props.options, event.target.value);
    setSelected(option);
    props.onSelect?.(option);
  };

  return (
    <select
      className={style(props.className, styles.select)}
      onChange={onChange}
      value={selected?.text}
    >
      {items}
    </select>
  );
}

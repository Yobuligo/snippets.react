import { useState } from "react";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { IToggleButtonGroupProps } from "./IToggleButtonGroupProps";
import { IToggleButtonOption } from "./IToggleButtonOption";
import styles from "./ToggleButtonGroup.module.scss";

export function ToggleButtonGroup<T extends IToggleButtonOption>(
  props: IToggleButtonGroupProps<T>
) {
  const [selected, setSelected] = useState(props.selected);
  const items = props.items.map((item) => (
    <ToggleButton
      item={item}
      onSelect={() => {
        setSelected(item);
        props.onSelect?.(item);
      }}
      selected={item === selected}
    />
  ));

  return <div className={styles.toggleButtonGroup}>{items}</div>;
}

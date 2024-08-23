import { useEffect, useState } from "react";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { IToggleButtonGroupProps } from "./IToggleButtonGroupProps";
import { IToggleButtonOption } from "./IToggleButtonOption";
import styles from "./ToggleButtonGroup.module.scss";

export function ToggleButtonGroup<T extends IToggleButtonOption<any>>(
  props: IToggleButtonGroupProps<T>
) {
  const [selected, setSelected] = useState<T | undefined>(props.selected);

  const onClick = (item: T) => {
    if (props.enableUnselectAll && item === selected) {
      setSelected(undefined);
      props.onChange?.(undefined);
    } else {
      setSelected(item);
      props.onSelect?.(item);
      props.onChange?.(item);
    }
  };

  const items = props.items.map((item, index) => (
    <ToggleButton
      key={index}
      disabled={props.disabled}
      item={item}
      onClick={() => onClick(item)}
      selected={item === selected}
    />
  ));

  useEffect(() => setSelected(props.selected), [props.selected]);

  return <div className={styles.toggleButtonGroup}>{items}</div>;
}

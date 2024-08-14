import { Button } from "../button/Button";
import { IToggleButtonOption } from "../toggleButtonGroup/IToggleButtonOption";
import { IToggleButtonProps } from "./IToggleButtonProps";
import styles from "./ToggleButton.module.scss";

export function ToggleButton<T extends IToggleButtonOption>(
  props: IToggleButtonProps<T>
) {
  return (
    <Button
      className={props.selected ? styles.selected : styles.unSelected}
      onClick={props.onSelect}
    >
      {props.item.title}
    </Button>
  );
}

import { Button } from "../button/Button";
import { IToggleButtonOption } from "../toggleButtonGroup/IToggleButtonOption";
import { IToggleButtonProps } from "./IToggleButtonProps";
import styles from "./ToggleButton.module.scss";

export function ToggleButton<T extends IToggleButtonOption<any>>(
  props: IToggleButtonProps<T>
) {
  return (
    <Button
      disabled={props.disabled}
      className={props.selected ? styles.selected : styles.unSelected}
      onClick={props.onSelect}
    >
      {props.item.text}
    </Button>
  );
}

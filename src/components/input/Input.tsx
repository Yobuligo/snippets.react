import { style } from "../../core/utils/style";
import { IInputProps } from "./IInputProps";
import styles from "./Input.module.scss";

export const Input: React.FC<IInputProps> = (props) => {
  const { className, onEnter, onEscape, ...inputProps } = props;

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onEnter?.();
    }

    if (event.key === "Escape") {
      props.onEscape?.();
    }
  };

  return (
    <input
      className={style(styles.input, className)}
      {...inputProps}
      onKeyDown={onKeyDown}
    />
  );
};

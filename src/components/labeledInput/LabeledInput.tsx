import { useId } from "react";
import { style } from "../../utils/style";
import { LabeledElement } from "../labeledElement/LabeledElement";
import { ILabeledInputProps } from "./ILabeledInputProps";
import styles from "./LabeledInput.module.scss";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const id = useId();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange?.(event.target.value);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onEnter?.();
    }
  };

  return (
    <LabeledElement elementId={id} label={props.label}>
      <input
        className={style(
          props.classNameInput,
          styles.labeledInput,
          props.disabled ? styles.inputDisabled : ""
        )}
        disabled={props.disabled}
        id={id}
        onChange={onChange}
        type={props.type ?? "text"}
        value={props.value}
        onKeyDown={onKeyDown}
      />
    </LabeledElement>
  );
};

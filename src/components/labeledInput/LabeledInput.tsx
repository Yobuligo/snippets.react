import { useId } from "react";
import { LabeledElement } from "../labeledElement/LabeledElement";
import { ILabeledInputProps } from "./ILabeledInputProps";
import styles from "./LabeledInput.module.scss";
import { style } from "../../core/ui/style";
import { Input } from "../input/Input";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const id = useId();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange?.(event.target.value);

  return (
    <LabeledElement elementId={id} label={props.label}>
      <Input
        className={style(
          props.classNameInput,
          styles.labeledInput,
          props.disabled ? styles.inputDisabled : ""
        )}
        disabled={props.disabled}
        id={id}
        onChange={onChange}
        onEnter={props.onEnter}
        onEscape={props.onEscape}
        type={props.type ?? "text"}
        value={props.value}
      />
    </LabeledElement>
  );
};

import { useId } from "react";
import { LabeledElement } from "../labeledElement/LabeledElement";
import { ISelectOption } from "../select/ISelectOption";
import { Select } from "../select/Select";
import { ILabeledSelectProps } from "./ILabeledSelectProps";
import styles from "./LabeledSelect.module.scss";
import { style } from "../../core/ui/style";

export function LabeledSelect<T extends ISelectOption<any>>(
  props: ILabeledSelectProps<T>
) {
  const id = useId();
  return (
    <LabeledElement elementId={id} label={props.label}>
      <Select
        className={style(
          styles.select,
          props.disabled ? styles.selectDisabled : ""
        )}
        disabled={props.disabled}
        onSelect={props.onSelect}
        selected={props.selected}
        options={props.options}
      />
    </LabeledElement>
  );
}

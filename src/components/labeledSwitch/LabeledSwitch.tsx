import { useId } from "react";
import { LabeledElement } from "../labeledElement/LabeledElement";
import { Switch } from "../switch/Switch";
import { ILabeledSwitchProps } from "./ILabeledSwitchProps";
import styles from "./LabeledInput.module.scss";

export const LabeledSwitch: React.FC<ILabeledSwitchProps> = (props) => {
  const id = useId();

  return (
    <LabeledElement elementId={id} label={props.label}>
      <div className={styles.inputContainer}>
        <Switch
          checked={props.checked}
          onChange={props.onChange}
          width="4rem"
        />
      </div>
    </LabeledElement>
  );
};

import { useId } from "react";
import { LabeledElement } from "../labeledElement/LabeledElement";
import { Switch } from "../switch/Switch";
import { ILabeledSwitchProps } from "./ILabeledSwitchProps";

export const LabeledSwitch: React.FC<ILabeledSwitchProps> = (props) => {
  const id = useId();

  return (
    <LabeledElement elementId={id} label={props.label}>
      <Switch checked={props.checked} onChange={props.onChange} width="4rem" />
    </LabeledElement>
  );
};

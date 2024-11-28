export interface ILabeledSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}

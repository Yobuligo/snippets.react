export interface ILabeledInputProps {
  classNameInput?: string;
  disabled?: boolean;
  label: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
}

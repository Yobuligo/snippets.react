export interface ILabeledInputProps {
  classNameInput?: string;
  disabled?: boolean;
  label: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
}

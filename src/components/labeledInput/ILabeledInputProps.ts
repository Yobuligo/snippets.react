import { ReactNode } from "react";

export interface ILabeledInputProps {
  children?: ReactNode;
  classNameInput?: string;
  disabled?: boolean;
  label: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
}

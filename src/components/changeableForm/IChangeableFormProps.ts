import { ReactNode } from "react";

export interface IChangeableFormProps {
  children?: ReactNode;
  deleteQuestion?: string;
  displayDelete?: boolean;
  displayMode: boolean;
  onCancel?: () => void;
  onDelete?: () => void;
  onSave?: () => void;
  onValidate?: () => void;
  setDisplayMode: (value: React.SetStateAction<boolean>) => void;
}

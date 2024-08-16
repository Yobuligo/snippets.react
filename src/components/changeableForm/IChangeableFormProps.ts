import { ReactNode } from "react";

export interface IChangeableFormProps {
  children?: ReactNode;
  displayMode: boolean;
  onCancel?: () => void;
  onSave?: () => void;
  setDisplayMode: (value: React.SetStateAction<boolean>) => void;
}

import { ReactNode } from "react";

export interface ILabeledElementProps {
  children: ReactNode;
  elementId: string;
  label: string;
}

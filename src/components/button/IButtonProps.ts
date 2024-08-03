import { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

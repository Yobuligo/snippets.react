import { ReactNode } from "react";

export interface IAsyncLoadProps {
  children?: ReactNode;
  load: () => Promise<void>;
  spinnerColor?: string;
}

import { ISelectOption } from "./ISelectOption";

export interface ISelectProps<T extends ISelectOption<any>> {
  className?: string;
  disabled?: boolean;
  onSelect?: (option: T) => void;
  options: T[];
  selected?: T;
}

import { ISelectOption } from "./ISelectOption";

export interface ISelectProps<T extends ISelectOption> {
  className?: string;
  onSelect?: (option: T) => void;
  options: T[];
  selected?: T;
}

import { IToggleButtonOption } from "./IToggleButtonOption";

export interface IToggleButtonGroupProps<T extends IToggleButtonOption> {
  disabled?: boolean;
  items: T[];
  onSelect?: (selected: T) => void;
  selected?: T;
}

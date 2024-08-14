import { IToggleButtonOption } from "./IToggleButtonOption";

export interface IToggleButtonGroupProps<T extends IToggleButtonOption> {
  items: T[];
  onSelect?: (selected: T) => void;
  selected?: T;
}

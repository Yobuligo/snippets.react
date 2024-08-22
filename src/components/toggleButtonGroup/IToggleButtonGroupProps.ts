import { IToggleButtonOption } from "./IToggleButtonOption";

export interface IToggleButtonGroupProps<T extends IToggleButtonOption<any>> {
  disabled?: boolean;
  items: T[];
  onSelect?: (selected: T) => void;
  selected?: T;
}

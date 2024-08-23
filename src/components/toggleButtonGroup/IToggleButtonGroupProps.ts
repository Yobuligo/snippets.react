import { IToggleButtonOption } from "./IToggleButtonOption";

export interface IToggleButtonGroupProps<T extends IToggleButtonOption<any>> {
  disabled?: boolean;

  /**
   * Provides the possibility to unselect all by clicking the selected button again.
   * Otherwise at least one button is selected.
   */
  enableUnselectAll?: boolean;
  items: T[];
  onChange?: (selected: T | undefined) => void;
  onSelect?: (selected: T) => void;
  selected?: T;
}

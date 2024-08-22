import { IToggleButtonOption } from "../toggleButtonGroup/IToggleButtonOption";

export interface IToggleButtonProps<T extends IToggleButtonOption<any>> {
  disabled?: boolean;
  item: T;
  onSelect?: () => void;
  selected: boolean;
}

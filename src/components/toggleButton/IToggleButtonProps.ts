import { IToggleButtonOption } from "../toggleButtonGroup/IToggleButtonOption";

export interface IToggleButtonProps<T extends IToggleButtonOption> {
  disabled?: boolean;
  item: T;
  onSelect?: () => void;
  selected: boolean;
}

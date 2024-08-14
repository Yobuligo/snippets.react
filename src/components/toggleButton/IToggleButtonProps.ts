import { IToggleButtonOption } from "../toggleButtonGroup/IToggleButtonOption";

export interface IToggleButtonProps<T extends IToggleButtonOption> {
  item: T;
  onSelect?: () => void;
  selected: boolean;
}

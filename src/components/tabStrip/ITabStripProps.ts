import { ITabItem } from "./ITabItem";

export interface ITabStripProps {
  onSelect: (tabItem: ITabItem, index: number) => void;
  selected: number;
  tabItems: ITabItem[];
}

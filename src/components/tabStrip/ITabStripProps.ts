import { ITabItem } from "./ITabItem";

export interface ITabStripProps {
  onSelect?: (tabItem: ITabItem) => void;
  tabItems: ITabItem[];
}

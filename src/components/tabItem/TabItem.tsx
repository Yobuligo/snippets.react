import { style } from "../../core/ui/style";
import { ITabItemProps } from "./ITabItemProps";
import styles from "./TabItem.module.scss";

export const TabItem: React.FC<ITabItemProps> = (props) => {
  return (
    <div
      className={style(
        styles.tabItem,
        props.selected ? styles.selectedTabItem : ""
      )}
      onClick={props.onSelect}
    >
      {props.title}
    </div>
  );
};

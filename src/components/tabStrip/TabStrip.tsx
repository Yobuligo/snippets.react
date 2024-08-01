import { TabItem } from "../tabItem/TabItem";
import { ITabStripProps } from "./ITabStripProps";
import styles from "./TabStrip.module.scss";

export const TabStrip: React.FC<ITabStripProps> = (props) => {
  const items = props.tabItems.map((tabItem, index) => (
    <TabItem
      key={index}
      onSelect={() => props.onSelect?.(tabItem, index)}
      selected={props.selected === index}
      title={tabItem.title}
    />
  ));

  return <header className={styles.header}>{items}</header>;
};

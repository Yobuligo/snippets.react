import { useState } from "react";
import { TabItem } from "../tabItem/TabItem";
import { ITabItem } from "./ITabItem";
import { ITabStripProps } from "./ITabStripProps";
import styles from "./TabStrip.module.scss";

export const TabStrip: React.FC<ITabStripProps> = (props) => {
  const [selected, setSelected] = useState(0);

  const onSelect = (tabItem: ITabItem, index: number) => {
    setSelected(index);
    props.onSelect?.(tabItem);
  };

  const items = props.tabItems.map((tabItem, index) => (
    <TabItem
      key={index}
      onSelect={() => onSelect(tabItem, index)}
      selected={selected === index}
      title={tabItem.title}
    />
  ));

  return (
    <div>
      <header className={styles.header}>{items}</header>
      <div className={styles.body}>{props.tabItems[selected].content}</div>
    </div>
  );
};

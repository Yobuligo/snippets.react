import { ITabStripContentProps } from "./ITabStripContentProp";
import styles from "./TabStripContent.module.scss";

export const TabStripContent: React.FC<ITabStripContentProps> = (props) => {
  return <div className={styles.tabStripContent}>{props.children}</div>;
};

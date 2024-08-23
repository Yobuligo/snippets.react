import { CollapsedIcon } from "../../icons/CollapsedIcon";
import { ExpandedIcon } from "../../icons/ExpandedIcon";
import componentStyles from "../../styles/components.module.scss";
import styles from "./Collapse.module.scss";
import { ICollapseProps } from "./ICollapseProps";

export const Collapse: React.FC<ICollapseProps> = (props) => {
  const onToggleCollapsed = () =>
    props.setCollapsed((previous) => {
      previous = !previous;
      props.onToggle?.(previous);
      return previous;
    });

  return (
    <button className={styles.collapse} onClick={onToggleCollapsed}>
      {props.title && <div className={props.titleClassName}>{props.title}</div>}
      {props.collapsed ? (
        <ExpandedIcon className={componentStyles.clickableIcon} />
      ) : (
        <CollapsedIcon className={componentStyles.clickableIcon} />
      )}
    </button>
  );
};

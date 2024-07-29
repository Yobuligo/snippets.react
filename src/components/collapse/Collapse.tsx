import { CollapsedIcon } from "../../icons/CollapsedIcon";
import { ExpandedIcon } from "../../icons/ExpandedIcon";
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
    <button className={styles.collapse}>
      {props.collapsed ? (
        <ExpandedIcon onClick={onToggleCollapsed} />
      ) : (
        <CollapsedIcon onClick={onToggleCollapsed} />
      )}
    </button>
  );
};

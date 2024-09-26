import { style } from "../../core/ui/style";
import { IToolbarProps } from "./IToolbarProps";
import styles from "./Toolbar.module.scss";

export const Toolbar: React.FC<IToolbarProps> = (props) => {
  return (
    <div
      className={style(
        styles.toolbar,
        props.alignRight === true ? styles.alignRight : "",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

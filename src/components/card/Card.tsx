import { style } from "../../core/ui/style";
import styles from "./Card.module.scss";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div
      className={style(styles.card, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

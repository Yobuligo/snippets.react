import { style } from "../../core/utils/style";
import styles from "./Card.module.scss";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={style(styles.card, props.className)}>{props.children}</div>
  );
};

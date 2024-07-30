import { style } from "../../core/utils/style";
import { IInputProps } from "./IInputProps";
import styles from "./Input.module.scss";

export const Input: React.FC<IInputProps> = (props) => {
  const { className, ...propList } = props;
  return <input className={style(styles.input, className)} {...propList} />;
};

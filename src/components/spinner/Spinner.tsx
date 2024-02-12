import { CSSProperties } from "react";
import { ISpinnerProps } from "./ISpinnerProps";
import styles from "./Spinner.module.scss";

export const Spinner: React.FC<ISpinnerProps> = (props) => {
  const style = {
    "--spinnerColor": `${props.color ?? "#fff"}`,
  } as CSSProperties;

  return <div className={styles.spinner} style={style} />;
};

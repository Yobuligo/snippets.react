import { CSSProperties } from "react";
import { ISpinnerProps } from "./ISpinnerProps";
import styles from "./Spinner.module.scss";

/**
 * This component is responsible for displaying a loading spinner.
 */
export const Spinner: React.FC<ISpinnerProps> = (props) => {
  const style = {
    "--spinnerColor": `${props.color ?? "#fff"}`,
  } as CSSProperties;

  return <div aria-label="spinner" className={styles.spinner} style={style} />;
};

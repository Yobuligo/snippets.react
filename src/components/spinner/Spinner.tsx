import { CSSProperties } from "react";
import { ISpinnerProps } from "./ISpinnerProps";
import styles from "./Spinner.module.scss";
import { SpinnerSize } from "./SpinnerSize";

/**
 * This component is responsible for displaying a loading spinner.
 */
export const Spinner: React.FC<ISpinnerProps> = (props) => {
  const getSpinnerSize = () => {
    switch (props.size) {
      case SpinnerSize.SMALL:
        return "24px";
      case SpinnerSize.MEDIUM:
        return "32px";
      default:
        return "48px";
    }
  };

  const getSpinnerBorderSize = () => {
    switch (props.size) {
      case SpinnerSize.SMALL:
        return "3px";
      case SpinnerSize.MEDIUM:
        return "3px";
      default:
        return "5px";
    }
  };

  const style = {
    "--spinnerColor": `${props.color ?? "#fff"}`,
    "--spinnerSize": `${getSpinnerSize()}`,
    "--spinnerBorderSize": `${getSpinnerBorderSize()}`,
  } as CSSProperties;

  return <div aria-label="spinner" className={styles.spinner} style={style} />;
};

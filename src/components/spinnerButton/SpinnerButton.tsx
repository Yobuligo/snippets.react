import { Spinner } from "../spinner/Spinner";
import { SpinnerSize } from "../spinner/SpinnerSize";
import { ISpinnerButtonProps } from "./ISpinnerButtonProps";
import styles from "./SpinnerButton.module.scss";

export const SpinnerButton: React.FC<ISpinnerButtonProps> = (props) => {
  const { displaySpinner, ...buttonProps } = props;
  return (
    <button {...buttonProps}>
      <div className={styles.spinnerButton}>
        {props.displaySpinner && <Spinner size={SpinnerSize.SMALL} />}
        {buttonProps.children}
      </div>
    </button>
  );
};

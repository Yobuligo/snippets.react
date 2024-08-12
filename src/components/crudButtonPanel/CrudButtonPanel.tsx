import { style } from "../../core/utils/style";
import { CheckIcon } from "../../icons/CheckIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { EditIcon } from "../../icons/EditIcon";
import componentStyles from "../../styles/components.module.scss";
import styles from "./CrudButtonPanel.module.scss";
import { ICrudButtonPanelProps } from "./ICrudButtonPanelProps";

/**
 * This component provides an edit and delete button and when switching to change mode a confirm and cancel button.
 */
export const CrudButtonPanel: React.FC<ICrudButtonPanelProps> = (props) => {
  return (
    <div className={style(styles.crudButtonPanel, props.className)}>
      {props.displayMode ? (
        <>
          <button className={styles.button} onClick={props.onEditMode}>
            <EditIcon className={componentStyles.clickableIcon} />
          </button>
          <button className={styles.button} onClick={props.onDelete}>
            <DeleteIcon className={componentStyles.clickableIcon} />
          </button>
        </>
      ) : (
        <>
          <button className={styles.button} onClick={props.onConfirm}>
            <CheckIcon className={componentStyles.clickableIcon} />
          </button>
          <button className={styles.button} onClick={props.onCancel}>
            <CloseIcon className={componentStyles.clickableIcon} />
          </button>
        </>
      )}
    </div>
  );
};

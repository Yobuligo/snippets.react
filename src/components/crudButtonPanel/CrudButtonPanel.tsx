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
    <div className={styles.crudButtonPanel}>
      {props.displayMode ? (
        <>
          <button className={styles.button}>
            <EditIcon
              className={componentStyles.clickableIcon}
              onClick={props.onEditMode}
            />
          </button>
          <button className={styles.button} onClick={props.onDelete}>
            <DeleteIcon className={componentStyles.clickableIcon} />
          </button>
        </>
      ) : (
        <>
          <button className={styles.button}>
            <CheckIcon
              className={componentStyles.clickableIcon}
              onClick={props.onConfirm}
            />
          </button>
          <button className={styles.button} onClick={props.onCancel}>
            <CloseIcon className={componentStyles.clickableIcon} />
          </button>
        </>
      )}
    </div>
  );
};

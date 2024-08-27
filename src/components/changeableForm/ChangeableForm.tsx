import { texts } from "../../lib/translation/texts";
import { useTranslation } from "../../lib/translation/useTranslation";
import { Button } from "../button/Button";
import { Toolbar } from "../toolbar/Toolbar";
import styles from "./ChangeableForm.module.scss";
import { IChangeableFormProps } from "./IChangeableFormProps";
import { useChangeableFormViewModel } from "./useChangeableFormViewModel";

/**
 * This component is responsible for displaying a form with a toolbar to switch between change and display mode and buttons for saving or cancelling changes.
 */
export const ChangeableForm: React.FC<IChangeableFormProps> = (props) => {
  const viewModel = useChangeableFormViewModel(props);
  const { t } = useTranslation();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <form className={styles.changeableForm} onSubmit={onSubmit}>
      <Toolbar className={styles.toolbar}>
        {props.displayMode ? (
          <Button onClick={viewModel.onToggleMode}>
            {t(texts.general.edit)}
          </Button>
        ) : (
          <>
            <Button
              className={styles.secondaryButton}
              onClick={viewModel.onCancel}
            >
              {t(texts.general.cancel)}
            </Button>
            {props.displayDelete && (
              <Button
                className={styles.secondaryButton}
                onClick={viewModel.onDelete}
              >
                {t(texts.general.delete)}
              </Button>
            )}
            <Button onClick={viewModel.onSave}>{t(texts.general.save)}</Button>
          </>
        )}
      </Toolbar>
      {props.children}
    </form>
  );
};

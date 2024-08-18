import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IChangeableFormProps } from "./IChangeableFormProps";

export const useChangeableFormViewModel = (props: IChangeableFormProps) => {
  const { t } = useTranslation();
  const onCancel = () => {
    props.setDisplayMode(true);
    props.onCancel?.();
  };

  const onDelete = () => {
    if (
      window.confirm(props.deleteQuestion ?? t(texts.general.deleteQuestion))
    ) {
      props.onDelete?.();
    }
  };

  const onSave = () => {
    try {
      props.onValidate?.();
      props.setDisplayMode(true);
      props.onSave?.();
    } catch (error) {
      // do nothing
    }
  };

  const onToggleMode = () => props.setDisplayMode((previous) => !previous);

  return { onCancel, onDelete, onToggleMode, onSave };
};

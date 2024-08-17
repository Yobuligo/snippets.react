import { IChangeableFormProps } from "./IChangeableFormProps";

export const useChangeableFormViewModel = (props: IChangeableFormProps) => {
  const onCancel = () => {
    props.setDisplayMode(true);
    props.onCancel?.();
  };

  const onSave = () => {
    props.setDisplayMode(true);
    props.onSave?.();
  };

  const onToggleMode = () => props.setDisplayMode((previous) => !previous);

  return { onCancel, onToggleMode, onSave };
};

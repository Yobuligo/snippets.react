import { useState } from "react";
import { LabeledInput } from "../labeledInput/LabeledInput";
import { SpinnerButton } from "../spinnerButton/SpinnerButton";
import styles from "./AddInput.module.scss";
import { IAddInputProps } from "./IAddInputProps";

/**
 * This component provides an input to enter a title and a button to trigger the creation of an object.
 */
export const AddInput: React.FC<IAddInputProps> = (props) => {
  const [title, setTitle] = useState("");

  const onAdd = () => {
    if (title.length > 0) {
      props.onAdd?.(title);
      setTitle("");
    }
  };

  const onChange = (newValue: string): void => setTitle(newValue);

  return (
    <div className={styles.addInput}>
      <LabeledInput
        label={props.label ?? ""}
        onChange={onChange}
        onEnter={onAdd}
        value={title}
      />

      <div>
        <SpinnerButton
          disabled={title.length === 0}
          displaySpinner={props.isAdding ?? false}
          onClick={onAdd}
        >
          {props.buttonCaption}
        </SpinnerButton>
      </div>
    </div>
  );
};

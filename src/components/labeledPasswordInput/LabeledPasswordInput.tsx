import { useToggle } from "../../hooks/useToggle";
import { VisibilityIcon } from "../../icons/VisibilityIcon";
import { VisibilityOffIcon } from "../../icons/VisibilityOffIcon";
import { LabeledInput } from "../labeledInput/LabeledInput";
import { ILabeledPasswordInputProps } from "./ILabeledPasswordInputProps";
import styles from "./LabeledPasswordInput.module.scss";

export const LabeledPasswordInput: React.FC<ILabeledPasswordInputProps> = (
  props
) => {
  const [displayPassword, toggleDisplayPassword] = useToggle(false);

  const onToggleDisplayPassword = () => toggleDisplayPassword();

  return (
    <LabeledInput {...props} type={displayPassword ? "text" : "password"}>
      {displayPassword ? (
        <VisibilityOffIcon
          className={styles.icon}
          onClick={onToggleDisplayPassword}
        />
      ) : (
        <VisibilityIcon
          className={styles.icon}
          onClick={onToggleDisplayPassword}
        />
      )}
    </LabeledInput>
  );
};

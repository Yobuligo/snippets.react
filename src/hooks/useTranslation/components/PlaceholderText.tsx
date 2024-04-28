import { findObjectPlaceholder } from "../utils/findObjectPlaceholder";
import { IPlaceholderTextProps } from "./IPlaceholderTextProps";
import styles from "./PlaceholderText.module.scss";

export const PlaceholderText: React.FC<IPlaceholderTextProps> = (props) => {
  // Split text at {{<placeholder-name>}}
  const texts = props.text.split(/({{.*?}})/);

  // wrap text elements by fragment
  // if text is a placeholder, find the placeholder and set it instead of the text
  const items = texts.map((text, index) => {
    const placeholder = findObjectPlaceholder(props.placeholders, text);
    return (
      <div key={index} className={styles.item}>
        {placeholder ? placeholder : text}
      </div>
    );
  });

  return <div>{items}</div>;
};

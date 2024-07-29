import { CSSProperties, useEffect, useState } from "react";
import colors from "../../styles/core/colors.module.scss";
import { ISwitchProps } from "./ISwitchProps";
import styles from "./Switch.module.scss";

export const Switch: React.FC<ISwitchProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked ?? false);
  let style: CSSProperties = {};

  useEffect(() => {
    if (props.checked !== undefined && props.checked !== null) {
      setIsChecked(props.checked);
    }
  }, [props.checked]);

  const addCSSProperty = (cssProperties: object) => {
    style = { ...style, ...cssProperties } as CSSProperties;
  };

  props.width && addCSSProperty({ "--switchWidth": props.width });
  props.sliderColor
    ? addCSSProperty({ "--sliderColor": props.sliderColor })
    : addCSSProperty({ "--sliderColor": colors.colorPrimaryDark });
  props.colorOffState
    ? addCSSProperty({ "--colorOffState": props.colorOffState })
    : addCSSProperty({ "--colorOffState": colors.colorDisabled });
  props.colorOnState
    ? addCSSProperty({ "--colorOnState": props.colorOnState })
    : addCSSProperty({ "--colorOnState": colors.colorPrimary });

  return (
    <label style={style} className={`${props.className} ${styles.switch}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={(event) => {
          setIsChecked(event.target.checked);
          props.onChange?.(event.target.checked);
        }}
        checked={isChecked}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

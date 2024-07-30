import styles from "../../styles/components.module.scss";

export const Icon: React.FC<{
  disabled?: boolean;
  SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}> = ({ SVG, ...props }) => {
  return (
    <SVG
      className={props.disabled === true ? styles.disabledIcon : styles.icon}
      {...props}
    />
  );
};

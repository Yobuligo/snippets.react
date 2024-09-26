import { ReactComponent as Icon } from "../assets/visibility-off.svg";
import { IIconProps } from "./core/IIconProps";

export const VisibilityOffIcon: React.FC<IIconProps> = (props) => {
  return <Icon className={props.className} onClick={props.onClick} />;
};

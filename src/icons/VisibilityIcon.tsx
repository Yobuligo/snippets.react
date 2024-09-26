import { ReactComponent as Icon } from "../assets/visibility.svg";
import { IIconProps } from "./core/IIconProps";

export const VisibilityIcon: React.FC<IIconProps> = (props) => {
  return <Icon className={props.className} onClick={props.onClick} />;
};

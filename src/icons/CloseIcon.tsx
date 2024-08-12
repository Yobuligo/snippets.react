import { ReactComponent as SVG } from "../assets/close.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const CloseIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

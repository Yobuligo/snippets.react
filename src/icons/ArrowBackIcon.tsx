import { ReactComponent as SVG } from "../assets/arrow-back.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const ArrowBackIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

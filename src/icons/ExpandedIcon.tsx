import { ReactComponent as SVG } from "../assets/expanded.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const ExpandedIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

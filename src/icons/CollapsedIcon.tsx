import { ReactComponent as SVG } from "../assets/collapsed.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const CollapsedIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

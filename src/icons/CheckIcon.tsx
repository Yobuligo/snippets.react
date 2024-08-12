import { Icon } from "./core/Icon";
import { ReactComponent as SVG } from "../assets/check.svg";
import { IIconProps } from "./core/IIconProps";

export const CheckIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

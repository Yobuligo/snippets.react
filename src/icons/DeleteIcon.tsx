import { ReactComponent as SVG } from "../assets/delete.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const DeleteIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

import { ReactComponent as SVG } from "../assets/edit.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const EditIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

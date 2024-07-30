import { ReactComponent as SVG } from "../assets/search.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const SearchIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};

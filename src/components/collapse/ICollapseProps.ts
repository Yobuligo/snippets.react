export interface ICollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  titleClassName?: string;
}

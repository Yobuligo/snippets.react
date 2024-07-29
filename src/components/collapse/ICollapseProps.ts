export interface ICollapseProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
  onToggle?: (collapsed: boolean) => void;
}

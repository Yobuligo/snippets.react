export interface ICrudButtonPanelProps {
  className?: string;
  displayMode: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onDelete: () => void;
  onEditMode: () => void;
}

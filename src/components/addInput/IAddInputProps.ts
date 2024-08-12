export interface IAddInputProps {
  /**
   * Provides the button caption which is displayed at the button to trigger adding.
   */
  buttonCaption?: string;

  /**
   * Provides if the button should be displayed as spinner button. E.g. if adding was triggered.
   */
  isAdding?: boolean;

  /**
   * Provides the input label.
   */
  label?: string;

  /**
   * Is called if the button to trigger adding was clicked.
   */
  onAdd?: (title: string) => void;
}

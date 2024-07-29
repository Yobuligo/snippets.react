export interface ISwitchProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  /** The width of the switch in e.g. rem, px. */
  width?: string;
  /** The color of the switch in "on" state */
  colorOnState?: string;
  /** The color of the switch in "off" state */
  colorOffState?: string;
  sliderColor?: string;
  /**
   * To override the width and colors in css, the following constants are available:
   *
   * --switchWidth (see {@link width})
   *
   *
   * --colorOffState (see {@link colorOffState})
   *
   *
   * --colorOnState (see {@link colorOnState})
   *
   *
   * --sliderColor
   *
   * @example
   * .switch {
   *   --switchWidth: 10rem;
   *   --colorOffState: darkgrey;
   *   --colorOnState: black;
   *   --sliderColor: purple;
   * }
   */
  className?: string;
}

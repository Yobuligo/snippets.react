import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";
export interface ITimer {
  /**
   * Returns if the timer was started but is currently not running
   */
  readonly isPaused: boolean;

  /**
   * Returns true if the timer is running, otherwise false. Returns false if the timer was started and then stopped.
   */
  readonly isRunning: boolean;

  /**
   * Register on event if timer has finished.
   */
  onFinish(handler: OnFinishHandler): void;

  /**
   * Register on event if timer tick has finished.
   */
  onTick(handler: OnTickHandler): void;

  /**
   * Stops the timer and resets it to its initial value.
   */
  reset(): void;

  /**
   * Starts the timer. Continues running, if it was stopped before.
   */
  start(): void;

  /**
   * Stops the timer if it is currently running
   */
  stop(): void;
}

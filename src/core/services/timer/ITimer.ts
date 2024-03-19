import { IDestructible } from "../../types/IDestructible";
import { OnFinishHandler } from "./OnFinishHandler";
import { OnRemainingSecondsChangeHandler } from "./OnRemainingSecondsChangeHandler";
import { UnregisterHandler } from "../../event/UnregisterHandler";

export interface ITimer extends IDestructible {
  /**
   * Returns the remaining seconds to the end of the timer.
   */
  readonly remainingSeconds: number;

  /**
   * Returns if the timer was started but is currently not running
   */
  readonly isPaused: boolean;

  /**
   * Returns true if the timer is running, otherwise false.
   * Returns also false if the timer was started and then stopped.
   * Returns also true if the timer was stopped and then started.
   */
  readonly isRunning: boolean;

  /**
   * Returns the milliseconds for each cycle to check if the timer is still running
   */
  readonly tickSize: number;

  /**
   * Register on event if remaining seconds was changed (either by tick, finish, reset)
   */
  onRemainingSecondsChange(
    handler: OnRemainingSecondsChangeHandler
  ): UnregisterHandler;

  /**
   * Register on event if timer has finished.
   */
  onFinish(handler: OnFinishHandler): UnregisterHandler;

  /**
   * Register on event timer tick
   */
  onTick(handler: OnRemainingSecondsChangeHandler): UnregisterHandler;

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

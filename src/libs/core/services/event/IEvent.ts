import { FuncArgs } from "../../types/FuncArgs";

/**
 * This interface represents an event which can be registered on and which can be triggered to notify the registered handlers.
 */
export interface IEvent<THandler extends Function> {
  /**
   * Returns the currently registered handlers
   */
  readonly handlers: THandler[];

  /**
   * Clears the currently registered handlers.
   */
  clear(): void;

  /**
   * Notifies the currently registered handlers.
   */
  notify(...args: FuncArgs<THandler>): void;

  /**
   * Registers a new {@link handler} to this event.
   */
  register(handler: THandler): void;
}

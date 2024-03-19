import { FunctionParams } from "../types/FunctionParams";
import { IEvent } from "./IEvent";
import { UnregisterHandler } from "./UnregisterHandler";

/**
 * This class is responsible for providing an event to register on or unregister from handlers
 * and to notify the registered handlers.
 */
export class Event<THandler extends Function> implements IEvent<THandler> {
  private readonly handlers: THandler[] = [];

  onEvent(handler: THandler): UnregisterHandler {
    this.handlers.push(handler);
    return () => {
      const index = this.handlers.findIndex((item) => item === handler);
      if (index !== -1) {
        this.handlers.splice(index, 1);
      }
    };
  }

  notify(...args: FunctionParams<THandler>): void {
    this.handlers.forEach((handler) => handler(...args));
  }
}

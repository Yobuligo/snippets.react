import { Constructor } from "../../core/types/Constructor";
import { Decorator } from "./types/Decorator";

/**
 * An implementation of this interface is responsible for caching decorator values and returning them.
 */
export interface IDecoratorStore {
  /**
   * Returns the value of the given {@link decorator} for class {@link type} or undefined if no value was set.
   */
  get<T>(type: Constructor<any>, decorator: Decorator): T | undefined;

  /**
   * Sets a value to the specified {@link decorator} for the given {@link type}.
   */
  set<T>(type: Constructor<any>, decorator: Decorator, value: T): void;
}

import { FuncArgs } from "../../types/FuncArgs";
import { IEvent } from "./IEvent";

export class Event<THandler extends Function> implements IEvent<THandler> {
  private _handlers: THandler[] = [];

  get handlers(): THandler[] {
    return this._handlers.map((handler) => handler);
  }

  clear(): void {
    this._handlers = [];
  }

  notify(...args: FuncArgs<THandler>): void {
    this._handlers.forEach((handler) => handler(...args));
  }

  register(handler: THandler): void {
    this._handlers.push(handler);
  }
}

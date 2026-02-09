import { Constructor } from "../../core/types/Constructor";
import { IDecoratorStore } from "./IDecoratorStore";
import { Decorator } from "./types/Decorator";

class DecoratorStoreDefault implements IDecoratorStore {
  private cache: Map<Constructor<any>, Map<Decorator, any>> = new Map();

  get<T>(type: Constructor<any>, decorator: Decorator): T | undefined {
    const row = this.cache.get(type);
    return row?.get(decorator);
  }

  set<T>(type: Constructor<any>, decorator: Decorator, value: T): void {
    const row = this.cache.get(type) ?? new Map<Decorator, any>();
    row.set(decorator, value);
    this.cache.set(type, row);
  }
}

export const DecoratorStore: IDecoratorStore = new DecoratorStoreDefault();

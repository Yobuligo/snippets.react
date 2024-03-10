import { IStaticRoute } from "./types/IStaticRoute";

export class StaticRoute<TPath extends string> implements IStaticRoute<TPath> {
  constructor(readonly origin: TPath) {}

  toPath(): string {
    return this.origin;
  }
}

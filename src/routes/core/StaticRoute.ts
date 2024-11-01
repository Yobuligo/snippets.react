import { IStaticRoute } from "./types/IStaticRoute";

/**
 * This class represents a static route for path {@link TPath}.
 */
export class StaticRoute<TPath extends string> implements IStaticRoute<TPath> {
  constructor(readonly origin: TPath) {}

  toPath(): string {
    return this.origin;
  }
}

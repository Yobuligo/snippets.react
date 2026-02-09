import { ISignal } from "./ISignal";

export class Signal implements ISignal {
  readonly createdAt: Date = new Date();
}

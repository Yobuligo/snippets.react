import { ErrorArgs } from "./ErrorArgs";
import { IHaveMessage } from "./IHaveMessage";

export interface IError extends IHaveMessage {
  args?: ErrorArgs;
  createdAt: Date;
  type?: string;
}

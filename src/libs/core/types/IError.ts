import { IHaveMessage } from "./IHaveMessage";

export interface IError extends IHaveMessage {
  createdAt: Date;
  type?: string;
}

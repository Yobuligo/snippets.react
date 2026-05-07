import { ErrorArgs } from "../../core/types/ErrorArgs";
import { IError } from "../../core/types/IError";
import { HttpStatusCode } from "../types/HttpStatusCode";

export class RestRequestError extends Error {
  readonly error: IError;
  constructor(
    type: string,
    readonly httpStatusCode: HttpStatusCode,
    message?: string,
    args?: ErrorArgs,
  ) {
    super(message);
    this.error = {
      args,
      createdAt: new Date(),
      message: message ?? "",
      type,
    };
  }
}

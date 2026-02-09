import { IError } from "../../core/types/IError";
import { HttpStatusCode } from "../types/HttpStatusCode";

export class RestRequestError extends Error {
  readonly error: IError;
  constructor(
    type: string,
    readonly httpStatusCode: HttpStatusCode,
    message?: string,
  ) {
    super(message);
    this.error = {
      createdAt: new Date(),
      message: message ?? "",
      type,
    };
  }
}

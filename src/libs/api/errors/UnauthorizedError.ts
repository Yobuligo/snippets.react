import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class UnauthorizedError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "UnauthorizedError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.UNAUTHORIZED_401, message, args);
  }
}

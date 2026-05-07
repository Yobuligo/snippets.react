import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class BadRequestError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "BadRequestError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.BAD_REQUEST_400, message, args);
  }
}

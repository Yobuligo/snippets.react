import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class InternalServerError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "InternalServerError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.INTERNAL_SERVER_ERROR_500, message, args);
  }
}

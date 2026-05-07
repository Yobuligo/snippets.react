import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class NotFoundError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "NotFoundError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.NOT_FOUND_404, message, args);
  }
}

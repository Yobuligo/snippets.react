import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class ForbiddenError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "ForbiddenError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.FORBIDDEN_403, message, args);
  }
}

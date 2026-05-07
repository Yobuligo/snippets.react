import { ErrorArgs } from "../../core/types/ErrorArgs";
import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class ConflictError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "ConflictError",
    args?: ErrorArgs,
  ) {
    super(type, HttpStatusCode.CONFLICT_409, message, args);
  }
}

import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class ConflictError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "ConflictError",
  ) {
    super(type, HttpStatusCode.CONFLICT_409, message);
  }
}

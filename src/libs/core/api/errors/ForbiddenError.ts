import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class ForbiddenError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "ForbiddenError",
  ) {
    super(type, HttpStatusCode.FORBIDDEN_403, message);
  }
}

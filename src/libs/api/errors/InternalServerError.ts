import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class InternalServerError extends RestRequestError {
  constructor(
    message?: string,
    type: string = "InternalServerError",
  ) {
    super(type, HttpStatusCode.INTERNAL_SERVER_ERROR_500, message);
  }
}

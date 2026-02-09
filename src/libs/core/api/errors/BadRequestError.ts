import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class BadRequestError extends RestRequestError {
  constructor(message?: string, type: string = "BadRequestError") {
    super(type, HttpStatusCode.BAD_REQUEST_400, message);
  }
}

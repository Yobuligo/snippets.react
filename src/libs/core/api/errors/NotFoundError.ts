import { HttpStatusCode } from "../types/HttpStatusCode";
import { RestRequestError } from "./RestRequestError";

export class NotFoundError extends RestRequestError {
  constructor(message?: string, type: string = "NotFoundError") {
    super(type, HttpStatusCode.NOT_FOUND_404, message);
  }
}

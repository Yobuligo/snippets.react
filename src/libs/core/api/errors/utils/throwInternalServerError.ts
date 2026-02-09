import { InternalServerError } from "../InternalServerError";

export const throwInternalServerError = (
  message?: string,
  type?: string
): never => {
  throw new InternalServerError(message, type);
};

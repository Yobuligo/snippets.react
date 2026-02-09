import { UnauthorizedError } from "../UnauthorizedError";

export const throwUnauthorizedError = (
  message?: string,
  type?: string
): never => {
  throw new UnauthorizedError(message, type);
};

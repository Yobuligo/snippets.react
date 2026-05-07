import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { UnauthorizedError } from "../UnauthorizedError";

export const throwUnauthorizedError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new UnauthorizedError(message, type, args);
};

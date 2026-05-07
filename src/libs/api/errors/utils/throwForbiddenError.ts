import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { ForbiddenError } from "../ForbiddenError";

export const throwForbiddenError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new ForbiddenError(message, type, args);
};

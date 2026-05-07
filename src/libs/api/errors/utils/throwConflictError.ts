import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { ConflictError } from "../ConflictError";

export const throwConflictError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new ConflictError(message, type, args);
};

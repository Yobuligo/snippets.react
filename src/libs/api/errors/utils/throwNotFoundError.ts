import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { NotFoundError } from "../NotFoundError";

export const throwNotFoundError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new NotFoundError(message, type, args);
};

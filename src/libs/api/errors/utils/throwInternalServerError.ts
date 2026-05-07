import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { InternalServerError } from "../InternalServerError";

export const throwInternalServerError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new InternalServerError(message, type, args);
};

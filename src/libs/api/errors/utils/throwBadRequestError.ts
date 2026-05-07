import { ErrorArgs } from "../../../core/types/ErrorArgs";
import { BadRequestError } from "../BadRequestError";

export const throwBadRequestError = (
  message?: string,
  type?: string,
  args?: ErrorArgs,
): never => {
  throw new BadRequestError(message, type, args);
};

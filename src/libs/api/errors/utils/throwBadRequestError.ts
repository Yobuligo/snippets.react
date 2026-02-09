import { BadRequestError } from "../BadRequestError";

export const throwBadRequestError = (
  message?: string,
  type?: string
): never => {
  throw new BadRequestError(message, type);
};

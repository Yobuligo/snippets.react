import { ForbiddenError } from "../ForbiddenError";

export const throwForbiddenError = (message?: string, type?: string): never => {
  throw new ForbiddenError(message, type);
};

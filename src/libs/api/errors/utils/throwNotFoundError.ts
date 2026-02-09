import { NotFoundError } from "../NotFoundError";

export const throwNotFoundError = (message?: string, type?: string): never => {
  throw new NotFoundError(message, type);
};

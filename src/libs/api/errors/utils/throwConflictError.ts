import { ConflictError } from "../ConflictError";

export const throwConflictError = (message?: string, type?: string): never => {
  throw new ConflictError(message, type);
};

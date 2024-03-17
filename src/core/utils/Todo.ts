import { NotImplementedError } from "./../errors/NotImplementedError";

/**
 * Throws a {@link NotImplementedError} with the given {@link reason}.
 */
export const Todo = (reason: string = "Not yet implemented"): never => {
  throw new NotImplementedError(reason);
};

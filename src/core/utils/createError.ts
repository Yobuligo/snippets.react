import { IError } from "./../types/IError";

/**
 * This function creates and returns an instance of {@link IError} from the given {@link message} and {@link type}.
 * It takes the current date as createdAt property.
 */
export const createError = (message: string, type?: string): IError => {
  return { createdAt: new Date(), message, type };
};

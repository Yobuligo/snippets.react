import { IError } from "./../types/IError";

/**
 * Returns true if the given {@link value} is of type {@link IError}, otherwise false.
 */
export const isError = (value: any): value is IError => {
  return "message" in value && "createdAt" in value;
};

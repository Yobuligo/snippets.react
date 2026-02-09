import { IError } from "../types/IError";
import { isError } from "./isError";

/**
 * Returns if the given {@link error} is of type {@link IError} and prop type matches the expected {@link errorType}.
 */
export const isErrorType = (
  error: unknown,
  errorType: string,
): error is IError => {
  if (isError(error) && error.type === errorType) {
    return true;
  }
  return false;
};

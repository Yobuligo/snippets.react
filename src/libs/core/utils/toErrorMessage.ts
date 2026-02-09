import { isError } from "../guards/isError";

/**
 * Returns the message of the given {@link error} if it is of type IError or Error, otherwise it returns {@link fallbackMessage}
 */
export const toErrorMessage = (
  error: unknown,
  fallbackMessage: string
): string => {
  if (isError(error) || error instanceof Error) {
    return error.message;
  } else {
    return fallbackMessage;
  }
};

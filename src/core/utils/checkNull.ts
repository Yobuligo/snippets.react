import { isNotNull } from "./isNotNull";

/**
 * This function is responsible for checking if the given {@link value} is null or undefined.
 * It throws an error, if {@link value} is not null or not undefined, otherwise it returns undefined.
 */
export const checkNull = <T>(value: T): undefined => {
  if (isNotNull(value)) {
    throw new Error(
      `Error while checking value. Value was expected to be null.`
    );
  }
  return undefined;
};

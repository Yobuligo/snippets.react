import { isNotNull } from "./isNotNull";

export const checkNull = <T>(value: T): undefined => {
  if (isNotNull(value)) {
    throw new Error(
      `Error while checking value. Value was expected to be null.`
    );
  }
  return undefined;
};

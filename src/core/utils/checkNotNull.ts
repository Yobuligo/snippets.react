import { isNull } from "./isNull";

export const checkNotNull = (value: any) => {
  if (isNull(value)) {
    throw new Error(
      `Error while checking value. Value was expected to be not null.`
    );
  }
};

import { IHaveMessage } from "../types/IHaveMessage";

/**
 * Returns if the given {@link object} is of type {@link IHaveMessage}.
 */
export const isMessage = (object: unknown): object is IHaveMessage => {
  return (
    typeof object === "object" &&
    object !== null &&
    object !== undefined &&
    "message" in object
  );
};

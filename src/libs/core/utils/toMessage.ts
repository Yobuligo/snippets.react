import { isMessage } from "../guards/isMessage";

/**
 * Returns the given {@link message} and extends it by the text of {@link object}, if it contains a message prop.
 */
export const toMessage = (message: string, object?: unknown): string => {
  if (isMessage(object)) {
    return `${message} ${object.message}`;
  } else {
    return message;
  }
};

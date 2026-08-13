import { formatPhoneNumber } from "../utils/formatPhoneNumber";

/**
 * Converts the given {@link phone} to a phone link in format tel:+491701234567.
 */
export const toPhoneLink = (phone: string): string => {
  return `tel:${formatPhoneNumber(phone)}`;
};

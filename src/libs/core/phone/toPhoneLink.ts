import { formatPhoneNumber } from "../utils/formatPhoneNumber";

/**
 * Converts the given {@link phone} to a phone link in format tel:+491701234567.
 */
export const toPhoneLink = (
  phone: string,
  countryCode: string = "+49",
): string => {
  return `tel:${formatPhoneNumber(phone, countryCode)}`;
};

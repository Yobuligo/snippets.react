/**
 * Converts a phone number to a valid phone number that can be called with a phone app.
 * E.g. converts 0170 123 4567 to +491701234567
 */
export const formatPhoneNumber = (
  phone: string,
  countryCode: string = "+49",
): string => {
  // only numbers and leading +
  const formatted = phone.replace(/[^+\d]/g, "");

  // return if number is already international
  if (formatted.startsWith("+")) {
    return formatted;
  }

  // starts with 00, convert to internal format 0049170... -> +49170...
  if (formatted.startsWith("00")) {
    return "+" + formatted.slice(2);
  }

  // starts with 0, convert to internal format 0170... -> +49170...
  if (formatted.startsWith("0")) {
    return countryCode + formatted.slice(1);
  }

  // unknown format
  return formatted;
};

import { formatPhoneNumber } from "../../../../../libs/core/utils/formatPhoneNumber";

describe("formatPhoneNumber", () => {
  describe("international format", () => {
    it("returns the number unchanged if it already starts with +", () => {
      expect(formatPhoneNumber("+491701234567")).toBe("+491701234567");
    });

    it("strips spaces and dashes from an already international number", () => {
      expect(formatPhoneNumber("+49 170-123 4567")).toBe("+491701234567");
    });
  });

  describe("00 prefix format", () => {
    it("converts a leading 00 to +", () => {
      expect(formatPhoneNumber("00491701234567")).toBe("+491701234567");
    });

    it("strips formatting characters before converting", () => {
      expect(formatPhoneNumber("00 49 170 123 4567")).toBe("+491701234567");
    });
  });

  describe("national format", () => {
    it("converts a leading 0 to the default country code +49", () => {
      expect(formatPhoneNumber("01701234567")).toBe("+491701234567");
    });

    it("strips formatting characters like spaces, dashes and parentheses", () => {
      expect(formatPhoneNumber("(0170) 123-4567")).toBe("+491701234567");
    });

    it("uses the given country code instead of the default", () => {
      expect(formatPhoneNumber("0791234567", "+41")).toBe("+41791234567");
    });
  });

  describe("unknown format", () => {
    it("returns the cleaned number unchanged if it has no +, 00 or leading 0", () => {
      expect(formatPhoneNumber("1701234567")).toBe("1701234567");
    });

    it("returns an empty string for an empty input", () => {
      expect(formatPhoneNumber("")).toBe("");
    });
  });
});

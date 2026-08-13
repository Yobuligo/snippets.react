import { toPhoneLink } from "../../../../../libs/core/phone/toPhoneLink";

describe("toPhoneLink", () => {
  it("converts an international number to a tel link", () => {
    expect(toPhoneLink("+491701234567")).toBe("tel:+491701234567");
  });

  it("converts a national number to a tel link using the default country code", () => {
    expect(toPhoneLink("01701234567")).toBe("tel:+491701234567");
  });

  it("converts a 00 prefixed number to a tel link", () => {
    expect(toPhoneLink("00491701234567")).toBe("tel:+491701234567");
  });

  it("strips formatting characters like spaces, dashes and parentheses", () => {
    expect(toPhoneLink("(0170) 123-4567")).toBe("tel:+491701234567");
  });

  it("uses the given country code instead of the default", () => {
    expect(toPhoneLink("0791234567", "+41")).toBe("tel:+41791234567");
  });

  it("returns an empty tel link for an empty input", () => {
    expect(toPhoneLink("")).toBe("tel:");
  });
});

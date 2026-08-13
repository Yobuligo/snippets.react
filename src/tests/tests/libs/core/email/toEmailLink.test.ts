import { toEmailLink } from "../../../../../libs/core/email/toEmailLink";

describe("toEmailLink", () => {
  it("converts an email address to a mailto link", () => {
    expect(toEmailLink("abcdefg@test.de")).toBe("mailto:abcdefg@test.de");
  });

  it("returns an empty mailto link for an empty input", () => {
    expect(toEmailLink("")).toBe("mailto:");
  });
});

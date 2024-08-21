import { IDateTimeSpan } from "./IDateTimeSpan";
import { isDateTimeSpan } from "./isDateTimeSpan";

describe("isDateTimeSpan", () => {
  it("returns true if is DateTimeSpan", () => {
    const dateTimeSpan: IDateTimeSpan = {
      from: new Date(),
      to: new Date(),
    };
    expect(isDateTimeSpan(dateTimeSpan)).toBe(true);
  });

  it("returns false if is not DateTimeSpan", () => {
    expect(isDateTimeSpan(new Date())).toBe(false);
  });

  it("returns false if type has same properties but of different types", () => {
    const dateTimeSpan = {
      from: "",
      to: 123,
    };
    expect(isDateTimeSpan(dateTimeSpan)).toBe(false);
  });
});

import { DateTime } from "./DateTime";
import { DateTimeIterator } from "./DateTimeIterator";

describe("DateTimeIterator", () => {
  it("iterates through one day", () => {
    const from: Date = new Date(Date.UTC(2024, 8, 17, 0, 0));
    const to: Date = new Date(Date.UTC(2024, 8, 17, 0, 0));
    let expected: Date | undefined;
    DateTimeIterator.iterate(from, to, (current) => {
      expected = current;
    });
    const expectedDate = expected ? expected.toISOString().split("T")[0] : "";
    expect(expectedDate).toBe("2024-09-17");
  });

  it("iterates through range", () => {
    const from: Date = new Date(Date.UTC(2024, 8, 17, 0, 0));
    const to: Date = new Date(Date.UTC(2024, 8, 19, 0, 0));
    let expected: Date[] = [];
    DateTimeIterator.iterate(from, to, (current) => {
      expected.push(current);
    });

    expect(expected.length).toBe(3);
    expect(DateTime.toDate(expected[0])).toBe("2024-09-17");
    expect(DateTime.toDate(expected[1])).toBe("2024-09-18");
    expect(DateTime.toDate(expected[2])).toBe("2024-09-19");
  });
});

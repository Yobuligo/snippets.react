import { NotImplementedError } from "../../errors/NotImplementedError";
import { Todo } from "../Todo";

describe("Todo", () => {
  it("throw NotImplementedError", () => {
    expect(Todo).toThrowError(NotImplementedError);
  });

  it("contains reason", () => {
    const throwError = () => {
      Todo("Todo Error");
    };
    expect(throwError).toThrowError("Todo Error");
  });
});

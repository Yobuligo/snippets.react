import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("is displayed", () => {
    const { container } = render(<Spinner />);
    // eslint-disable-next-line
    const spinner = container.querySelector("div");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("class", "spinner");
  });

  it("changed color", () => {
    const { container } = render(<Spinner color="red" />);
    // eslint-disable-next-line
    const spinner = container.querySelector("div");
    expect(spinner).toHaveAttribute("style", "--spinnerColor: red;");
  });
});

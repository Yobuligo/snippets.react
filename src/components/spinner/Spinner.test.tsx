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
});

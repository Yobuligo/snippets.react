import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("is displayed", () => {
    render(<Spinner />);
    const spinner = screen.getByLabelText("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("class", "spinner");
  });

  it("changed color", () => {
    render(<Spinner color="red" />);
    const spinner = screen.getByLabelText("spinner");
    expect(spinner).toHaveAttribute("style", "--spinnerColor: red;");
  });
});

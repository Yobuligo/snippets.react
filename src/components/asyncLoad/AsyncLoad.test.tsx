import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AsyncLoad } from "./AsyncLoad";

describe.only("AsyncLoad", () => {
  it("displays loading spinner", async () => {
    render(<AsyncLoad load={async () => {}}>Demo</AsyncLoad>);
    const spinner = await screen.findByLabelText("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("class", "spinner");    
  });

  it("displays content after loading", async () => {
    render(
      <AsyncLoad load={async () => new Promise((resolve) => resolve())}>
        Demo
      </AsyncLoad>
    );

    await waitForElementToBeRemoved(() => screen.queryByLabelText("spinner"));
    const text = screen.getByText(/demo/i);
    expect(text).toBeInTheDocument();
  });
});

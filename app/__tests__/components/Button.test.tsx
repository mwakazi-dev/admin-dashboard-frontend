import React from "react";
import { render } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("handles click event", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);
    getByText("Click Me").click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

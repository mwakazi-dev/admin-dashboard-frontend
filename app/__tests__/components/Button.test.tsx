import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("handles click event", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onClick when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Click Me
      </Button>
    );

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

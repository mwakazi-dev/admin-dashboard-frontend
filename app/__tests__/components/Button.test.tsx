import React from "react";
import { render } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeInTheDocument();
  });
});

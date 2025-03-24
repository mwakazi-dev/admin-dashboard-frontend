import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByText("Hello world!");

    expect(heading).toBeInTheDocument();
  });
});

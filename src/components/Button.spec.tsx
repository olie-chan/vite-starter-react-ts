import * as React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("increments the count", () => {
    render(<Button />);
  });
});

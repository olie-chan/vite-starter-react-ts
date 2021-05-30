import React from "react";
import { mount } from "@cypress/react";
import Button from "@components/Button";

describe("Button", () => {
  it("should render", () => {
    mount(<Button />)
      .get("button")
      .should("have.text", "Count: 0")
      .click()
      .should("have.text", "Count: 1");
  });
});

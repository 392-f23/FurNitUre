import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { expect } from "chai"; // Import expect from Chai
import AddForm from "./FurnitureAddForm";

describe("AddForm Component success", () => {
  const addFurnitureMock = (formData) => {};

  it('should display "Delivery Method" input when the button is clicked', () => {
    render(
      <Router>
        <AddForm addFurniture={addFurnitureMock} />
      </Router>
    );

    const deliveryMethodButton = screen.getByText("Delivery Method");
    fireEvent.click(deliveryMethodButton);

    const deliveryMethodInput = screen.getByRole("textbox", {
      name: "Delivery Method",
    });

    expect(deliveryMethodInput).to.exist;
  });
});

describe("AddForm Component failure", () => {
  const addFurnitureMock = (formData) => {
    console.log("Mock function called with formData:", formData);
  };

  it("should not display form elements without button clicks", () => {
    render(
      <Router>
        <AddForm addFurniture={addFurnitureMock} />
      </Router>
    );

    const deliveryMethodInput = screen.queryByLabelText("Delivery Method");

    expect(deliveryMethodInput).to.not.exist;
  });
});

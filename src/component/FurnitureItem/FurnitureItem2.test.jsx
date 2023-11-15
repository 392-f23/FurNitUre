import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FurnitureItem from "../FurnitureItem/FurnitureItem";
import { BrowserRouter } from "react-router-dom";

// Mocking useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("FurnitureItem Component", () => {
  it("displays the contact information when Contact button is clicked", () => {
    // Mock data
    const item = {
      imageLink: "test-image.jpg",
      furnitureName: "Chair",
      price: "100",
      description: "A comfortable chair",
      sellerName: "John Doe",
      sellerPhoneNumber: "123456789",
      sellerAddress: "123 Test Street",
    };

    // Render Component
    render(
      <BrowserRouter>
        <FurnitureItem item={item} itemId="1" />
      </BrowserRouter>
    );

    // Simulate clicking the Contact button
    fireEvent.click(screen.getByText("Contact"));

    // Assertions
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("123456789")).toBeInTheDocument();
    expect(screen.getByText("123 Test Street")).toBeInTheDocument();
  });
});

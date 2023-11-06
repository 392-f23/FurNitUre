import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FurnitureItem from "./FurnitureItem";

const itemMock = {
  itemId: "1",
  item: {
    furnitureName: "Table",
    imageLink: "https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg",
    description: "Discover the essence of elegant living ...",
    price: "40",
    sellerName: "Michael Johnson",
    sellerAddress: "1234 Elm Street, Springfield, MA 01234",
    sellerPhoneNumber: "123-456-7890",
    deliveryMethod: "Local pickup",
    condition: "New",
    brand: "Ballard Designs",
    decorStyle: "Mid-Century Modern",
    finsh: "Distressed",
    material: "Metal",
  },
};

describe("FurnitureItem", () => {
  it("should open ContactModal when CONTACT button is clicked", async () => {
    render(
      <BrowserRouter>
        <FurnitureItem item={itemMock.item} itemId={itemMock.itemId} />
      </BrowserRouter>
    );

    const contactButton = screen.getByRole("button", { name: /contact/i });
    fireEvent.click(contactButton);

    const contactInfo = await screen.findByText(/contact information/i);
    expect(contactInfo).not.toBeNull();
  });

  it("should handle incomplete contact information", async () => {
    const incompleteItemMock = {
      ...itemMock,
      item: {
        ...itemMock.item,
        sellerPhoneNumber: null,
      },
    };

    render(
      <BrowserRouter>
        <FurnitureItem
          item={incompleteItemMock.item}
          itemId={incompleteItemMock.itemId}
        />
      </BrowserRouter>
    );

    const contactButton = screen.getByRole("button", { name: /contact/i });
    fireEvent.click(contactButton);

    const contactInfo = await screen.findByText(/contact information/i);
    expect(contactInfo).not.toBeNull();

    const missingPhoneText = screen.queryByText(
      /seller phone number is not provided/i
    );
    expect(missingPhoneText).not.toBeNull();
  });
});

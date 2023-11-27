import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import FurnitureDescription from "./FurnitureDescription";
import { BrowserRouter } from "react-router-dom";

const itemMock = {
  item: [
    {
      brand: "Ballard Designs",
      condition: "New",
      decorStyle: "Mid-Century Modern",
      deliveryMethod: "Local pickup",
      description:
        "Discover the essence of elegant living with this exquisitely handcrafted table, blending modern design with traditional craftsmanship. Its sleek lines and robust wooden structure infuse a touch of unique charm into your living space. Every detail is meticulously refined, ensuring it's not just a practical piece of furniture but an artistic statement. Moreover, its multifunctional design makes it suitable for various settings, be it a formal office environment or a cozy home ambiance. Choose our table and elevate your space with distinctive style.",
      finsh: "Distressed",
      furnitureName: "Table",
      imageLink: "https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg",
      material: "Metal",
      price: "40",
      sellerAddress: "1234 Elm Street, Springfield, MA 01234",
      sellerName: "Michael Johnson",
      sellerPhoneNumber: "123-456-7890",
    }
  ],
};

describe("FurnitureDescription Component", () => {
  it("When the Furniture item card is clicked and the user is redirected to the Furniture Description page. The page should contain all the properties a Furniture object is defined.", async () => {
    render(
      <BrowserRouter>
        <FurnitureDescription item={itemMock.item} />
      </BrowserRouter>
    );

    const brand = await screen.findByText(/brand/i);
    expect(brand).not.toBeNull();
    const condition = await screen.findByText(/condition/i);
    expect(condition).not.toBeNull();
    const deliveryMethod = await screen.findByText(/deliveryMethod/i);
    expect(deliveryMethod).not.toBeNull();
    const description = await screen.findByText(/description/i);
    expect(description).not.toBeNull();
    const finsh = await screen.findByText(/finsh/i);
    expect(finsh).not.toBeNull();
    const material = await screen.findByText(/material/i);
    expect(material).not.toBeNull();
    const price = await screen.findByText(/price/i);
    expect(price).not.toBeNull();
  });

  // it("When the Furniture item card is clicked and the user is redirected to the Furniture Description page. The page should contain all the properties a Furniture object is defined.", async () => {
  //   render(
  //     <BrowserRouter>
  //       <FurnitureDescription item={itemMock.item} />
  //     </BrowserRouter>
  //   );

  //   const brand = await screen.findByText(/distance/i);
  //   expect(brand).not.toBeNull();
  //   const condition = await screen.findByText(/method/i);
  //   expect(condition).not.toBeNull();
  // });
});
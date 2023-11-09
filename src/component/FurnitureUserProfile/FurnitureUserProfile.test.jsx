import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FurnitureUserProfile from "./FurnitureUserProfile";

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

const mockUser = {
    displayName: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "123-456-7890",
    photoURL: "https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/michael.jpg",
  };
  
const profile = {
    user: mockUser,
    isAdmin: false, 
};

describe("FurnitureUserProfile Component", () => {
    it("should display the correct avatar on the user profile page", () => {
        render(
        <BrowserRouter>
            <FurnitureUserProfile profile={profile} data={mockData} />
        </BrowserRouter>
        );

        const userProfileAvatar = screen.getByRole("img", { name: /user avatar/i });
        expect(userProfileAvatar).toHaveAttribute("src", mockUser.photoURL);
    });
});
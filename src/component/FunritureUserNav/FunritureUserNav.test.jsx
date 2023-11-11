import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FunritureUserNav from "./FunritureUserNav";
import { it, vi } from 'vitest';
import { signInWithGoogle, signOut, useAuthState } from '../../utilities/firebase.js';





const mockUser = {
    displayName: "CW",
    email: "cw@gmail.com",
    phone: "123-456-7890",
    photoURL: "https://i.imgur.com/c3g6Yb.png",
  };
  
const profile = {
    user: mockUser,
    isAdmin: false, 
};

vi.mock('../../utilities/firebase.js');

describe("User Navigation", () => {
    it("When the user is not logged in, the Publish button should not be displayed for the user.", () => {
        useAuthState.mockReturnValue([null]);
        render(
        <BrowserRouter>
            <FunritureUserNav profile={null} />
        </BrowserRouter>
        );

        const button = screen.getByText(/Sign In/i);
        expect(button);
        expect(screen.queryByRole(/img/i)).toBeNull();
    });


    it("Other wise, should have the avartar", () => {
        useAuthState.mockReturnValue([profile]);
        render(
        <BrowserRouter>
            <FunritureUserNav profile={profile} />
        </BrowserRouter>
        );

        const button = screen.getByText(/Sign Out/i);
        expect(button);
        expect(screen.queryByRole(/img/i));
    });

});
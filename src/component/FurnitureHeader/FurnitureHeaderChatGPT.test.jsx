import { render, fireEvent, screen } from '@testing-library/react';
import FurnitureHeader from './FurnitureHeader';
import * as firebaseUtils from "../../utilities/firebase";
import { useNavigate } from 'react-router-dom';

// Mocking Firebase and useNavigate
vi.mock("../../utilities/firebase", () => ({
  useAuthState: vi.fn(),
  signOut: vi.fn(),
}));
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe('FurnitureHeader', () => {
  it('should display logout button when user is logged in', async () => {
    // Setting up the mock return values
    const mockUser = {};
    firebaseUtils.useAuthState.mockReturnValue([mockUser, false]);
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    // Render the component
    render(<FurnitureHeader />);

    // Interact with the component
    const logoutButton = await screen.findByText(/LOG OUT/);
    fireEvent.click(logoutButton);

    // Assertions
    expect(firebaseUtils.signOut).toHaveBeenCalled();
    // Add any additional assertions as necessary
  });
});

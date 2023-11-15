
import { render, fireEvent, screen } from '@testing-library/react';
import FurnitureHeader from './FurnitureHeader';
import * as firebaseUtils from "../../utilities/firebase";
import { useNavigate } from 'react-router-dom';

// Mocking Firebase and useNavigate with vi.fn() from Vitest
vi.mock("../../utilities/firebase", () => ({
  useAuthState: vi.fn(),
  signOut: vi.fn(),
}));
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe('FurnitureHeader', () => {
  it('should display logout in clickable button when user is logged in', async () => {
    const mockUser = {
      isAdmin: null,
      user: {
        accessToken: "your-access-token",
        auth: {},
        displayName: "Adrian Hoffer",
        email: "adrianhoffer2024@u.northwestern.edu",
        emailVerified: true,
        isAnonymous: false,
        metadata: {},
        phoneNumber: null,
        photoURL: "",
        proactiveRefresh: {},
        providerData: [{}],
        providerId: "firebase",
        reloadListener: null,
        reloadUserInfo: {},
        stsTokenManager: {},
        tenantId: null,
        uid: "ByrFixi45JSRcF72sFORJ5EU8x83",
      }
    };
    firebaseUtils.useAuthState.mockReturnValue([mockUser, false]);
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);
    render(<FurnitureHeader profile={{ user: mockUser }} />);
    const logoutButton = await screen.findByText(/Logout/);
    fireEvent.click(logoutButton);
    expect(firebaseUtils.signOut).toHaveBeenCalled();
  });
});
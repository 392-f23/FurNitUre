import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FunritureUserNav from './FunritureUserNav';
import * as firebaseUtils from '../../utilities/firebase';

// Mock the firebase utilities
vi.mock('../../utilities/firebase', () => ({
  signInWithGoogle: vi.fn(),
  signOut: vi.fn(),
  useAuthState: vi.fn(),
}));

// Helper function to render the component within a router context
const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(component, { wrapper: MemoryRouter });
};

describe('FunritureUserNav', () => {
  it('renders SignInButton when user is not authenticated', () => {
    firebaseUtils.useAuthState.mockReturnValue([null]);

    renderWithRouter(<FunritureUserNav />);
    expect(screen.queryByText('Sign in')).not.toBeNull();
  });

  it('renders SignOutButton and AvatarButton when user is authenticated', () => {
    const mockUser = { user: { uid: '123', photoURL: 'http://example.com/avatar.jpg' } };
    firebaseUtils.useAuthState.mockReturnValue([mockUser]);

    renderWithRouter(<FunritureUserNav profile={mockUser} />);
    expect(screen.queryByText('Sign out')).not.toBeNull();
    const img = screen.queryByRole('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(mockUser.user.photoURL);
  });

  it('triggers signInWithGoogle when SignInButton is clicked', () => {
    firebaseUtils.useAuthState.mockReturnValue([null]);

    renderWithRouter(<FunritureUserNav />);
    fireEvent.click(screen.getByText('Sign in'));
    expect(firebaseUtils.signInWithGoogle).toHaveBeenCalled();
  });

  it('triggers signOut when SignOutButton is clicked', () => {
    const mockUser = { user: { uid: '123', photoURL: 'http://example.com/avatar.jpg' } };
    firebaseUtils.useAuthState.mockReturnValue([mockUser]);

    renderWithRouter(<FunritureUserNav profile={mockUser} />);
    fireEvent.click(screen.getByText('Sign out'));
    expect(firebaseUtils.signOut).toHaveBeenCalled();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FurnitureUserProfile, { findUserItems } from './FurnitureUserProfile';
import FurnitureItemContainer from '../FurnitureItemContainer/FurnitureItemContainer';

vi.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

vi.mock('../FurnitureItemContainer/FurnitureItemContainer', () => ({
  __esModule: true,
  default: ({ items, filteredItems, filters }) => (
    <div>Furniture Items</div>
  ),
}));

describe('findUserItems', () => {
  it('should return items owned by the user', () => {
    const user = { displayName: 'John' };
    const data = {
      items: [
        { sellerName: 'John', name: 'Chair' },
        { sellerName: 'Doe', name: 'Table' },
      ],
    };
    const result = findUserItems(user, data);
    expect(result).toEqual([{ sellerName: 'John', name: 'Chair' }]);
  });
});

describe('<FurnitureUserProfile />', () => {
  it('renders the profile information and owned furniture items', () => {
    const profile = {
      user: {
        displayName: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        photoURL: 'https://example.com/photo.jpg',
      },
      isAdmin: false,
    };
    const data = {
      items: [
        { sellerName: 'John Doe', name: 'Chair' },
      ],
    };

    render(
      <MemoryRouter>
        <FurnitureUserProfile profile={profile} data={data} />
      </MemoryRouter>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('Furniture Items')).toBeInTheDocument();
  });
});

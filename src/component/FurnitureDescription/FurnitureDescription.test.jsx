import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FurnitureItem from '../FurnitureItem/FurnitureItem';
import FurnitureDescription from './FurnitureDescription';
import userEvent from '@testing-library/user-event';


describe('FurnitureDescription Success', () => {
  it('redirects to the correct route when FurnitureItem is clicked', () => {
    const mockItemId = '97';

    const mockItem = {
      itemId: mockItemId,
      item: {
        furnitureName: 'Test Furniture',
        price: 52,
        description: 'Test Description',
        imageLink: "https://en.m.wikipedia.org/wiki/File:Cat03.jpg",
        condition: 'New',
        brand: 'leather',
        decorStyle: 'Modern',
        finsh: 'Polished',
        material: 'Wood',
        deliveryMethod: 'Pickup',
        sellerName: 'Rebecca',
        sellerAddress: '1838 Chicago',
        sellerPhoneNumber: '123-456-7890',
      },
    };

    const { getByText, container, history } = render(
      <MemoryRouter initialEntries={[`/FurnitureDescription/${mockItemId}/detail`]}>
        <Routes>
          <Route
            path="/FurnitureDescription/:itemId/detail"
            element={<FurnitureDescription item={mockItem.item} />}
          />
          <Route
            path="*" 
            element={<FurnitureItem itemId={mockItemId} item={mockItem.item} />} 
          />
        </Routes>
      </MemoryRouter>
    );


    const cardActionArea = getByText(mockItem.item.furnitureName, { exact: false }).closest('.MuiCardActionArea-root');
    
    if (cardActionArea) {
      fireEvent.click(cardActionArea);
      expect(history.location.pathname).toBe(`/FurnitureDescription/${mockItemId}/detail`);
    }
  });
});

describe('FurnitureDescription Failure', () => {
  it('does not redirect to the correct route on click', () => {
    const mockItemId = '97';

    const mockItem = {
      itemId: mockItemId,
      item: {
        furnitureName: 'Test Furniture',
        price: 52,
        description: 'Test Description',
        imageLink: "https://en.m.wikipedia.org/wiki/File:Cat03.jpg",
        condition: 'New',
        brand: 'leather',
        decorStyle: 'Modern',
        finsh: 'Polished',
        material: 'Wood',
        deliveryMethod: 'Pickup',
        sellerName: 'Rebecca',
        sellerAddress: '1838 Chicago',
        sellerPhoneNumber: '123-456-7890',
      },
    };

    const { getByText, container } = render(
      <MemoryRouter initialEntries={[`/SomeOtherRoute`]}>
        <Routes>
          <Route
            path="/FurnitureDescription/:itemId/detail"
            element={<FurnitureDescription item={mockItem.item} />}
          />
          <Route
            path="*" 
            element={<FurnitureItem itemId={mockItemId} item={mockItem.item} />} 
          />
        </Routes>
      </MemoryRouter>
    );

    const cardActionArea = getByText(mockItem.item.furnitureName, { exact: false }).closest('.MuiCardActionArea-root');
    
    if (cardActionArea) {
      userEvent.click(cardActionArea);
      expect(window.location.pathname).not.toBe(`/FurnitureDescription/${mockItemId}/detail`);
    } else {
      fail('Card Action Area not found');
    }
  });
});
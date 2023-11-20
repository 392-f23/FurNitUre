import { render, screen } from '@testing-library/react';
import FurnitureItemContainer from './FurnitureItemContainer';
import { BrowserRouter } from 'react-router-dom';
import FurnitureItem from '../FurnitureItem/FurnitureItem';

vi.mock('../FurnitureItem/FurnitureItem', () => {
    return {
        default: ({ item }) => (
          <div data-testid="furniture-item">
            <div className="furniture-item-name">{item.furnitureName}</div>
            {/* Add other elements as needed */}
          </div>
        )
      };
  });
  

describe('FurnitureItemContainer Tests', () => {
  it('displays only items that meet the applied filter', async () => {
    const items = {
      '1': { furnitureName: 'Chair', condition: 'New' },
      '2': { furnitureName: 'Table', condition: 'Used' },
      '3': { furnitureName: 'Sofa', condition: 'New' }
    };
    const filteredItems = [{ id: '1' }, { id: '3' }];
    const filters = ['New'];
    render(
        <BrowserRouter>
          <FurnitureItemContainer items={items} filteredItems={filteredItems} filters={filters} />
        </BrowserRouter>
      );
      const chairItem = await screen.findByText('Chair');
      const sofaItem = await screen.findByText('Sofa');
  
      expect(document.body.contains(chairItem)).to.be.true;
      expect(document.body.contains(sofaItem)).to.be.true;
  });
});

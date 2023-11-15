import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddForm from "./FurnitureAddForm";

describe('AddForm component', () => {
  it('displays Delivery Method input when clicked', () => {
    render(<AddForm addFurniture={() => {}} />);
    
    // Check that the Delivery Method input is not initially displayed
    expect(screen.queryByLabelText(/Delivery Method/i)).not.toBeInTheDocument();

    // Click the "Delivery Method" button
    fireEvent.click(screen.getByText(/Delivery Method/i));

    // Check that the Delivery Method input is now displayed
    expect(screen.getByLabelText(/Delivery Method/i)).toBeInTheDocument();
  });
});

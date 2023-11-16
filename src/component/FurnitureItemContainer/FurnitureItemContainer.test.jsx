import React from 'react';
import FurnitureItemContainer from './FurnitureItemContainer';
import FurnitureItem from '../FurnitureItem/FurnitureItem';
import {jest} from '@testing-library/jest-dom';
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
  
  const mockFurnitureData = {
    "1": {
        "furnitureName": "Table",
        "imageLink": "https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg",
        "description": "Discover the essence of elegant living with this exquisitely handcrafted table, blending modern design with traditional craftsmanship. Its sleek lines and robust wooden structure infuse a touch of unique charm into your living space. Every detail is meticulously refined, ensuring it's not just a practical piece of furniture but an artistic statement. Moreover, its multifunctional design makes it suitable for various settings, be it a formal office environment or a cozy home ambiance. Choose our table and elevate your space with distinctive style.",
        "price": "40",
        "sellerName": "Michael Johnson",
        "sellerAddress": "1234 Elm Street, Springfield, MA 01234",
        "sellerPhoneNumber": "123-456-7890",
        "deliveryMethod": "Local pickup",
        "condition":"New",
        "brand":"Ballard Designs",
        "decorStyle":"Mid-Century Modern",
        "finsh":"Distressed",
        "material":"Metal"
    },
    "2": {
        "furnitureName": "Chair",
        "imageLink": "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img20200424095419_mksoe.jpg",
        "description": "Step into a world of elegance with this meticulously maintained, second-hand chair. Crafted with precision and passion, its timeless design complements any setting. Gently used, it retains its original charm and comfort, making it perfect for both style and relaxation. Why pay full price when you can own this classic piece at a fraction? It's not just a chair, it's an investment in quality. Don't miss out on this limited opportunity to elevate your space!",
        "price": "75",
        "sellerName": "Emily Thompson",
        "sellerAddress": "5678 Maple Lane, Rivertown, CA 56789",
        "sellerPhoneNumber": "234-567-8901",
        "deliveryMethod": "Shipping",
        "condition": "Used - Like new",
        "brand": "Ballard Designs",
        "decorStyle": "Contemporary",
        "finish": "Distressed",
        "material": "Metal"
    },
};

describe('FurnitureItemContainer Tests', () => {

  it('renders with filters', () => {
    const filters = ['Table'];
    render(
        <BrowserRouter>
            <FurnitureItemContainer items={mockFurnitureData} filters={filters} />
        </BrowserRouter>);
    expect(screen.getByText('Table')).toBeInTheDocument();
    expect(screen.queryByText('Chair')).toBeNull();
  });

  it('renders with filteredItems', () => {
    const filteredItems = [{ id: '1' }, { id: '2' }];
    render(
    <BrowserRouter>
        <FurnitureItemContainer items={mockFurnitureData} filteredItems={filteredItems} />
    </BrowserRouter>);
    expect(screen.getByText('Chair')).toBeInTheDocument();
    expect(screen.getByText('Table')).toBeInTheDocument();
  });

  it('test fail', () => {
    
    render(
        <BrowserRouter>
            <FurnitureItemContainer items={mockFurnitureData} filteredItems={Object.entries(mockFurnitureData)} filters={""} />
        </BrowserRouter>);
    expect(screen.getByText('Chair')).toBeInTheDocument();
    expect(screen.getByText('Table')).toBeInTheDocument();
  });
});


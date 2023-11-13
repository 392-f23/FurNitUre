import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import FurnitureHeader from './FurnitureHeader';
it('displays logged out button when logged in', async () => {
    render(<FurnitureHeader />);
    await screen.findByText(/LOGIN OUT/);
  });
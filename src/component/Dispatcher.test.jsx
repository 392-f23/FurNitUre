import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dispatcher from './Dispatcher';
it('displays logged out button when logged in', async () => {
    render(<Dispatcher />);
    await screen.findByText(/LOGIN OUT/);
  });
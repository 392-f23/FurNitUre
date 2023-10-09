import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FurnitureDescription from "./FurnitureDescription/FurnitureDescription";
import AddForm from "./FurnitureAddForm/FurnitureAddForm";
import MainPage from "./MainPage";

const Dispatcher = ({}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/FurnitureDescription/furnitureId/detail" element={<FurnitureDescription />}></Route>
            <Route path="/createListing" element={<AddForm/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;
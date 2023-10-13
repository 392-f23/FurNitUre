import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FurnitureDescription from "./FurnitureDescription/FurnitureDescription";
import AddForm from "./FurnitureAddForm/FurnitureAddForm";
import MainPage from "./MainPage";

const ItemWrapper = ({data}) => {
    const { itemId } = useParams();
    const item = data.items[itemId];
  
    if (!item) {
      return <div>Item not found</div>;
    }
    return <FurnitureDescription item={item} />;
}
const Dispatcher = ({data}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage data={data} />}></Route>
            <Route path="/createListing" element={<AddForm/>}></Route>
            <Route path="/FurnitureDescription/:itemId/detail" element={<ItemWrapper data={data}/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;
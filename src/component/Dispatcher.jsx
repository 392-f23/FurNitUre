import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import FurnitureDescription from "./FurnitureDescription/FurnitureDescription";
import AddForm from "./FurnitureAddForm/FurnitureAddForm";
import MainPage from "./MainPage";
import { useProfile } from "../utilities/userProfile";
import FurnitureUserProfile from "./FurnitureUserProfile/FurnitureUserProfile"

const ItemWrapper = ({ data }) => {
  const { itemId } = useParams();
  const item = data.items[itemId];

  if (!item) {
    return <div>Item not found</div>;
  }
  console.log(item);
  return <FurnitureDescription item={item} />;
};

const Dispatcher = ({ data, addFurniture, profile }) => {


  return <BrowserRouter>
    <Routes>
    <Route path="/users/:id" element={<FurnitureUserProfile profile={profile} data={data}/>} />
      <Route path="/" element={<MainPage data={data} profile={profile}/>}></Route>
      <Route
        path="/createListing" 
        element={<AddForm addFurniture={addFurniture} />}
      ></Route>
      <Route
        path="/FurnitureDescription/:itemId/detail"
        element={<ItemWrapper data={data} />}
      ></Route>
    </Routes>
  </BrowserRouter>
}



export default Dispatcher;

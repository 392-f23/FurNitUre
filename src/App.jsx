import { useState } from "react";
import Dispatcher from "./component/Dispatcher";
import data from "./utilities/furnitureData.json";
//import data from "./component/mockData.json";
import "./App.less";

const App = () => {
  const [furnitureData, setFurnitureData] = useState(data.furniture);
  const addFunriture = (furniture) => {
    setFurnitureData({...furnitureData, furniture});
  };

  return (
    <div className="app">
      <Dispatcher data={furnitureData} addFurniture={addFunriture} />
    </div>
  );
};

export default App;

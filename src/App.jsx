import { useState } from "react";
import Dispatcher from "./component/Dispatcher";
import data from "./component/mockData.json";
import "./App.less";

const App = () => {
  console.log(data)
  const [furnitureData, setFurnitureData] = useState(data);
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

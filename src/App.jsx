import { useState, useEffect } from "react";
import Dispatcher from "./component/Dispatcher";
import { useDbData, signOut } from "./utilities/firebase";
import { useProfile } from "./utilities/userProfile";
import "./App.less";

const App = () => {
  const [profile, profileError] = useProfile();
  const [data, error] = useDbData("/");
  const [furnitureData, setFurnitureData] = useState();

  useEffect(() => {
    if (data) {
      setFurnitureData(data.furniture);
    }
    if (error) {
      console.error(error);
    }
  }, [data, error]);

  const addFunriture = (furniture) => {
    setFurnitureData({ ...furnitureData, furniture });
  };

  return (
    <div className="app">
      {data && <Dispatcher data={data.furniture} addFurniture={addFunriture} profile={profile} />}
    </div>
  );
};

export default App;

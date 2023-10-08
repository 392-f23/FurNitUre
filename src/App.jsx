import 'bootstrap/dist/css/bootstrap.min.css';
import FurnitureHeader from "./component/FurnitureHeader/FurnitureHeader";
import FurnitureContent from "./component/FurnitureContent/FurnitureContent";
import "./App.less";

const App = () => {
  return (
    <div className="app">
      <FurnitureHeader />
      <FurnitureContent />
    </div>
  );
};

export default App;

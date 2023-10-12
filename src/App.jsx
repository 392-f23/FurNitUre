import "./App.less";
import Dispatcher from "./component/Dispatcher";
import data from './component/mockData.json';

const App = () => {
  return (
    <div className="app">
      <Dispatcher data={data}/>
    </div>
  );
};

export default App;

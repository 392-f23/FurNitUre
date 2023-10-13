import FurnitureHeader from "./FurnitureHeader/FurnitureHeader";
import FurnitureContent from ".//FurnitureContent/FurnitureContent";

const MainPage = (props) => {
  const {data} = props
  return (
    <div className="main">
      <FurnitureHeader />
      <FurnitureContent data={data} />
    </div>
  );
};

export default MainPage;
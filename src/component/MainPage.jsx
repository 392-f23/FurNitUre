import FurnitureHeader from "./FurnitureHeader/FurnitureHeader";
import FurnitureContent from ".//FurnitureContent/FurnitureContent";

const MainPage = ({ data }) => {
  return (
    <>
      <FurnitureHeader />
      <FurnitureContent data={data} />
    </>
  );
};

export default MainPage;

import FurnitureHeader from "./FurnitureHeader/FurnitureHeader";
import FurnitureContent from ".//FurnitureContent/FurnitureContent";

const MainPage = (props) => {
  const { data } = props;
  return (
    <>
      <FurnitureHeader />
      <FurnitureContent data={data} />
    </>
  );
};

export default MainPage;

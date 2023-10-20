import FurnitureHeader from "./FurnitureHeader/FurnitureHeader";
import FurnitureContent from ".//FurnitureContent/FurnitureContent";

const MainPage = ({ data, profile }) => {
  return (
    <>
      <FurnitureHeader profile={profile} />
      <FurnitureContent data={data} />
    </>
  );
};

export default MainPage;

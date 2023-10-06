import FurnitureSideBar from "../FurnitureSideBar/FurnitureSideBar";
import FurnitureItemContainer from "../FurnitureItemContainer/FurnitureItemContainer";
import "./FurnitureContent.less";

const FurnitureContent = () => {
  return (
    <div className="furniture-content">
      <FurnitureSideBar />
      <FurnitureItemContainer />
    </div>
  );
};

export default FurnitureContent;

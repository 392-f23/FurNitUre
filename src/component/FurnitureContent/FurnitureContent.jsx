import FurnitureSideBar from "../FurnitureSideBar/FurnitureSideBar";
import FurnitureItemContainer from "../FurnitureItemContainer/FurnitureItemContainer";
import "./FurnitureContent.less";

const FurnitureContent = (props) => {
  const {data} = props
  return (
    <div className="furniture-content">
      <FurnitureSideBar />
      <FurnitureItemContainer items={data.items} />
    </div>
  );
};

export default FurnitureContent;

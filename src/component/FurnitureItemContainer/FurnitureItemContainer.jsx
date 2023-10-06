import FurnitureItem from "../FurnitureItem/FurnitureItem";
import "./FurnitureItemContainer.less";

const FurnitureItemContainer = () => {
  return (
    <div className="furniture-item-container">
      <div className="furniture-item-list">
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
        <FurnitureItem />
      </div>
    </div>
  );
};

export default FurnitureItemContainer;

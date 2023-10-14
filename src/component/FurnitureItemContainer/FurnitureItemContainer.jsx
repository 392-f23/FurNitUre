import FurnitureItem from "../FurnitureItem/FurnitureItem";
import "./FurnitureItemContainer.less";

const FurnitureItemContainer = (props) => {
  const items = props.items;
  return (
    <div className="furniture-item-container">
      <div className="furniture-item-list">
        {Object.entries(items).map(([id, item]) => (
          <FurnitureItem key={id} itemId={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureItemContainer;

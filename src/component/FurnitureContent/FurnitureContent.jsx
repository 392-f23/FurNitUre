import FurnitureSideBar from "../FurnitureSideBar/FurnitureSideBar";
import FurnitureItemContainer from "../FurnitureItemContainer/FurnitureItemContainer";
import "./FurnitureContent.less";
import { useState } from "react";

const FurnitureContent = (props) => {
  const {data} = props
  const [filteredItems, setFilteredItems] = useState(data.items);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredItems(data.items);
      return;
    }
    const itemsArray = Object.values(data.items);
    const filtered = itemsArray.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <div className="furniture-content">
      <FurnitureSideBar onSearch={handleSearch} />
      <FurnitureItemContainer items={filteredItems} />
    </div>
  );
};

export default FurnitureContent;

import FurnitureSideBar from "../FurnitureSideBar/FurnitureSideBar";
import FurnitureItemContainer from "../FurnitureItemContainer/FurnitureItemContainer";
import "./FurnitureContent.less";
import { useState } from "react";

const FurnitureContent = (props) => {
  const { data } = props;
  const [filters, setFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredItems(null);
      return;
    }
    const itemsArray = Object.entries(data.items);
    const filtered = itemsArray
      .filter(
        ([id, item]) =>
          item.furnitureName.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
      .map(([id, item]) => ({ ...item, id }));
    setFilteredItems(filtered);
  };

  const handleFilter = (filterType) => {
    if (filters.includes(filterType)) {
      setFilters((prevFilters) => prevFilters.filter((f) => f !== filterType));
    } else {
      setFilters((prevFilters) => [...prevFilters, filterType]);
    }
  };

  return (
    <div className="furniture-content">
      <FurnitureSideBar onSearch={handleSearch} onFilter={handleFilter} />
      <FurnitureItemContainer
        items={data.items}
        filteredItems={filteredItems}
        filters={filters}
      />
    </div>
  );
};

export default FurnitureContent;

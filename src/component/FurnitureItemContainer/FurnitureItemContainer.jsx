import FurnitureItem from "../FurnitureItem/FurnitureItem";
import "./FurnitureItemContainer.less";

const FurnitureItemContainer = ({ items, filteredItems, filters }) => {
  
  const filterItems = (items) => {
    if (filters.length === 0) return items;
    
    return items.filter(({ item }) => {
      return filters.some(filterValue => {
        return Object.values(item).includes(filterValue);
      });
    });
  }

  const itemsToDisplay = filteredItems
    ? filterItems(filteredItems.map((fItem) => ({
        id: fItem.id,
        item: items[fItem.id],
      })))
    : filterItems(Object.entries(items).map(([id, item]) => ({ id, item })));

  return (
    <div className="furniture-item-container">
      <div className="furniture-item-list">
        {itemsToDisplay.map(({ id, item }) => (
          <FurnitureItem key={id} itemId={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureItemContainer;

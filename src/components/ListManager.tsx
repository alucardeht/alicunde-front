import React, { useState } from "react";

const ListManager = () => {
  // State for the current input value
  const [currentItem, setCurrentItem] = useState("");

  // State for the list of items
  const [items, setItems] = useState<string[]>([]);

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentItem(e.target.value);
  }

  // Handler for the button click
  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, currentItem]);
    setCurrentItem(""); // Clear the input field
  }

  // Handler for the item click
  const handleItemClick = (index: number) => {
    setItems(prevItems => prevItems.filter((item, i) => i !== index));
  }

  return (
    <div>
      <input value={currentItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;

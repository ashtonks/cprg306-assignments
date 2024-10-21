"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    setSelectedIngredient(item.name);
  };

  return (
    <main className="bg-slate-950 p-5" style={styles.main}>
      <h1 style={styles.header}>Shopping List</h1>
      <div style={styles.flexContainer}>
        {/* Left section for the Shopping List */}
        <div style={styles.leftSection}>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right section for the Meal Ideas */}
        <div style={styles.rightSection}>
          <MealIdeas ingredient={selectedIngredient} />
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    color: "white",
  },
  header: {
    fontSize: "30px",
    fontWeight: "bold",
    padding: "10px",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftSection: {
    flex: 1,
    marginRight: "20px",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#1e293b",
    padding: "10px",
    borderRadius: "8px",
  },
};

"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context.js";
import Link from "next/link";
import { addItem, getItems } from "../_services/shopping-list-service.js";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { ...item, id: newItemId }]);
    }
  };

  const handleItemSelect = (item) => {
    setSelectedIngredient(item.name);
  };

  const loadItems = async () => {
    if (user) {
      try {
        const loadedItems = await getItems(user.uid);
        setItems(loadedItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) {
    return (
      <div>
        <p>Not signed in</p>
        <Link href="../week-9">Click here to sign in</Link>
      </div>
    );
  }

  return (
    <main className="bg-slate-950 p-5" style={styles.main}>
      <h1 style={styles.header}>Shopping List</h1>
      <div style={styles.flexContainer}>
        <div style={styles.leftSection}>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
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

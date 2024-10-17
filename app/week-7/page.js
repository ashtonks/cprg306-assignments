"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main class="bg-slate-950">
      <h1 style={styles.header}>Shopping List</h1>
      <div>
        <ul>
          <li style={styles.containter}></li>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </ul>
      </div>
    </main>
  );
}

const styles = {
  header: {
    fontSize: "30px",
    fontWeight: "bold",
    padding: "5px",
  },
  containter: {
    flex: 1,
    flexDirection: "column",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

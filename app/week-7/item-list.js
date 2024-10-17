"use client";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const groupByCategory = (items) => {
    return items.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push({ ...item });
      return grouped;
    }, {});
  };

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupByCategory(sortedItems);

  return (
    <div>
      <button
        style={sortBy === "name" ? styles.button : styles.darkbutton}
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        style={sortBy === "category" ? styles.button : styles.darkbutton}
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
      <button
        style={sortBy === "groupedCategory" ? styles.button : styles.darkbutton}
        onClick={() => setSortBy("groupedCategory")}
      >
        Grouped by Category
      </button>

      {sortBy === "groupedCategory" ? (
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category}>
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul>
                {groupedItems[category].map((item) => (
                  <li key={item.id}>
                    <Item
                      name={item.name}
                      category={item.category}
                      quantity={item.quantity}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Item
                name={item.name}
                category={item.category}
                quantity={item.quantity}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "darkorange",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  darkbutton: {
    backgroundColor: "#92400E",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
};

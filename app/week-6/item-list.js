"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const items = [
    {
      id: "1h2GJKH12gkHG31h1H",
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      id: "2KJH3k2j3H1k2J3K1H",
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      id: "3h2KJH3k2j3H1k2J3",
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      id: "4k2J3K1H2GJKH12gk",
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      id: "5H1h1H2KJH3k2j3H",
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      id: "6H1k2J3K1H2GJKH1",
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      id: "7gkHG31h1H2KJH3k",
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      id: "8j3H1k2J3K1H2GJK",
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      id: "9H12gkHG31h1H2KJ",
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      id: "10H3k2j3H1k2J3K1",
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      id: "11k2J3K1H2GJKH12",
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      id: "12GJKH12gkHG31h1",
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

  const groupByCategory = (items) => {
    return items.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
      return grouped;
    }, {});
  };

  const sortedItems = [...items].sort((a, b) => {
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

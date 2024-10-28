"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const HandleSubmit = (event) => {
    event.preventDefault();
    let item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    console.log(item);
    setName("");
    setCategory("produce");
    setQuantity(1);
    const id = Math.floor(Math.random() * 1000);
    item.id = id;
    onAddItem(item);
  };

  const Increment = () => {
    if (quantity === 20) {
      return;
    }
    setQuantity(quantity + 1);
  };

  const Decrement = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md mx-4 my-4">
      <form onSubmit={HandleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white placeholder-gray-500"
            placeholder="Item name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-800 p-2 rounded-md">
            <button
              onClick={Decrement}
              type="button"
              className="bg-gray-400 text-white rounded-md px-3 py-1 mr-2"
            >
              -
            </button>
            <span className="text-white">{quantity}</span>
            <button
              onClick={Increment}
              type="button"
              className="bg-blue-500 text-white rounded-md px-3 py-1 ml-2"
            >
              +
            </button>
          </div>

          <select
            id="category"
            name="category"
            className="border border-gray-300 rounded-md p-2 bg-gray-800 text-white"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="pt-4">
          <input
            type="submit"
            value="+"
            className="w-full bg-blue-500 text-white rounded-md p-3 text-center cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default NewItem;

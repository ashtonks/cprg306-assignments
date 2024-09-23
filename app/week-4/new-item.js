"use client";
import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

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
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-10 bg-white flex items-center justify-between text-black px-2">
      <span className="mr-0">{quantity}</span>

      <div className="flex space-x-2">
        <button
          onClick={Decrement}
          className="bg-gray-400 text-white px-3 py-0 rounded"
        >
          -
        </button>
        <button
          onClick={Increment}
          className="bg-blue-500 text-white px-3 py-0 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;

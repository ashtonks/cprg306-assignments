import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <div className="item-box p-2 m-4 bg-slate-900 text-white max-w-sm">
      <p>{name}</p>
      <p style={styles.item}>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
const styles = {
  item: {
    fontSize: "16px",
    fontWeight: "normal",
  },
};

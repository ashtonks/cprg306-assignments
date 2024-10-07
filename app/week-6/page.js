import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main class="bg-slate-950">
      <h1 style={styles.header}>Shopping List</h1>
      <div>
        <ul>
          <li style={styles.containter}></li>
          <ItemList />
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

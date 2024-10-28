import Link from "next/link";

export default function Page() {
  return (
    <main style={styles.container}>
      <h1 style={styles.header}>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2">Week 2</Link>
      <p></p>
      <Link href="week-3">Week 3</Link>
      <p></p>
      <Link href="week-4">Week 4</Link>
      <p></p>
      <Link href="week-5">Week 5</Link>
      <p></p>
      <Link href="week-6">Week 6</Link>
      <p></p>
      <Link href="week-7">Week 7</Link>
      <p></p>
      <Link href="week-8">Week 8</Link>
      <p></p>
      <Link href="week-9">Week 9</Link>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  header: {
    fontSize: 40,
  },
};

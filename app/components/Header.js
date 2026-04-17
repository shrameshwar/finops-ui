// app/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "15px", borderBottom: "1px solid #333" }}>
      <h2>⚡ FinOps Portal</h2>

      <nav style={{ marginTop: "10px" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
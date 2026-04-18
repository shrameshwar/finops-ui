"use client";
import { useState } from "react";

export default function FinOpsDashboard() {
  const [projectId, setProjectId] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 FinOps Dashboard</h1>

      <input
        placeholder="Enter Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button style={{ marginLeft: "10px" }}>
        Analyze
      </button>
    </div>
  );
}
// app/components/ProjectInput.js
export default function ProjectInput({ value, onChange }) {
  return (
    <input
      placeholder="Enter Project ID"
      value={value}
      onChange={onChange}
      style={{ padding: "10px", width: "300px" }}
    />
  );
}
// app/components/Features.js
export default function Features() {
  const features = [
    "GCP Cost Optimization",
    "Multi-Project Analysis",
    "Idle VM Detection",
    "Rightsizing Suggestions",
    "AI Cost Insights",
    "Future AWS + Azure Support"
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {features.map((f, i) => (
        <div key={i} className="p-5 bg-slate-800 rounded-xl">
          {f}
        </div>
      ))}
    </div>
  );
}
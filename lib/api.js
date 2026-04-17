// lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getRecommendations(projectId) {
  const res = await fetch(
    `${API_URL}/recommendations?project_id=${projectId}`
  );
  return res.json();
}
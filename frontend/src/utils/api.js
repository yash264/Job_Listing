export const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

async function handleRes(res) {
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    if (!res.ok) throw new Error(json.message || text || res.statusText);
    return json;
  } catch {
    if (!res.ok) throw new Error(text || res.statusText);
    return text;
  }
}

export async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  return handleRes(res);
}

export function authHeaders() {
  const token = localStorage.getItem("hs_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

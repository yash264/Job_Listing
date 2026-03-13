import { useState } from "react";
import { Button } from "../components/ui/Button";
import { apiFetch } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("seeker");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password, type })
      });
      if (res.token) {
        localStorage.setItem("hs_token", res.token);
        window.location.href = "/dashboard";
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError(err.message || "Login error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 rounded bg-card border border-border">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-2 rounded bg-input" required />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 rounded bg-input" required />
          <div className="flex gap-2 items-center">
            <label className="text-sm">Role:</label>
            <select value={type} onChange={e => setType(e.target.value)} className="p-2 rounded bg-input">
              <option value="seeker">Job Seeker</option>
              <option value="provider">Job Provider</option>
            </select>
          </div>
          {error && <div className="text-destructive text-sm">{error}</div>}
          <Button className="w-full" type="submit">Sign In</Button>
        </form>
        <div className="mt-4 text-sm text-muted-foreground">
          Don’t have an account? <a href="/signup" className="text-primary">Sign up</a>
        </div>
      </div>
    </div>
  );
}

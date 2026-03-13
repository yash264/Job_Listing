import { useState } from "react";
import { Button } from "../components/ui/Button";
import { apiFetch } from "../utils/api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", type: "seeker" });
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await apiFetch("/register", {
        method: "POST",
        body: JSON.stringify(form)
      });
      window.location.href = "/login";
    } catch (err) {
      setError(err.message || "Signup error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 rounded bg-card border border-border">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" className="w-full p-2 rounded bg-input" required />
          <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" placeholder="Email" className="w-full p-2 rounded bg-input" required />
          <input value={form.password} onChange={e => setForm({...form, password: e.target.value})} type="password" placeholder="Password" className="w-full p-2 rounded bg-input" required />
          <div className="flex gap-2 items-center">
            <label className="text-sm">Role:</label>
            <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="p-2 rounded bg-input">
              <option value="seeker">Job Seeker</option>
              <option value="provider">Job Provider</option>
            </select>
          </div>
          {error && <div className="text-destructive text-sm">{error}</div>}
          <Button className="w-full" type="submit">Create Account</Button>
        </form>
        <div className="mt-4 text-sm text-muted-foreground">
          Already have an account? <a href="/login" className="text-primary">Login</a>
        </div>
      </div>
    </div>
  );
}

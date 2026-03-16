import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/Button";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden md:block w-64 p-4 border-r border-border bg-card">
        <div className="mb-6"><h3 className="text-xl font-semibold">HireSathi</h3></div>
        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block p-2 rounded hover:bg-secondary">Dashboard</a>
          <a href="/jobs" className="block p-2 rounded hover:bg-secondary">Jobs</a>
          <a href="/candidates" className="block p-2 rounded hover:bg-secondary">Candidates</a>
          <a href="/login" className="block p-2 rounded hover:bg-secondary">Sign In</a>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between p-4 border-b border-border bg-card md:pl-6">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded bg-card border border-border" onClick={() => setOpen(!open)}>
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold">HireSathi</h2>
          </div>
          <div>
            <Button variant="ghost" size="sm" onClick={() => { localStorage.removeItem("hs_token"); window.location.href = "/"; }}>
              Sign out
            </Button>
          </div>
        </header>

        {open && (
          <div className="md:hidden p-4 border-b border-border bg-card">
            <nav className="space-y-2">
              <a href="/dashboard" className="block p-2 rounded hover:bg-secondary">Dashboard</a>
              <a href="/jobs" className="block p-2 rounded hover:bg-secondary">Jobs</a>
              <a href="/candidates" className="block p-2 rounded hover:bg-secondary">Candidates</a>
            </nav>
          </div>
        )}

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

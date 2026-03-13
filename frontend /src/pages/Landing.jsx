import { Button } from "../components/ui/Button";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-center mb-4">HireSathi — Your Partner in Hiring</h1>
      <p className="text-muted-foreground text-center max-w-2xl mb-6">
        Connect employers with job seekers. Post jobs, apply, and manage hiring — all in one place.
      </p>
      <div className="flex gap-4">
        <a href="/signup"><Button variant="default" size="lg">Get Started</Button></a>
        <a href="/jobs"><Button variant="secondary" size="lg">Browse Jobs</Button></a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="p-6 rounded bg-card border border-border text-center">
          <h3 className="font-semibold mb-2">For Employers</h3>
          <p className="text-muted-foreground">Post jobs and manage candidates.</p>
        </div>
        <div className="p-6 rounded bg-card border border-border text-center">
          <h3 className="font-semibold mb-2">For Job Seekers</h3>
          <p className="text-muted-foreground">Find and apply to jobs easily.</p>
        </div>
        <div className="p-6 rounded bg-card border border-border text-center">
          <h3 className="font-semibold mb-2">Smart Dashboard</h3>
          <p className="text-muted-foreground">Role-based dashboards and stats.</p>
        </div>
      </div>
    </div>
  );
}

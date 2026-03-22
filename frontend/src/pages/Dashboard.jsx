import { Button } from "../components/ui/Button";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Choose your role</h2>
        <div className="flex gap-6 justify-center">
          <a href="/dashboard/employer"><Button variant="default">Employer</Button></a>
          <a href="/dashboard/seeker"><Button variant="secondary">Job Seeker</Button></a>
        </div>
      </div>
    </div>
  );
}

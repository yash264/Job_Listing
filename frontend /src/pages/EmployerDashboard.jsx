import { Card } from "../components/ui/Card";

export default function EmployerDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employer Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card><p>Active Jobs: 12</p></Card>
        <Card><p>Total Applicants: 248</p></Card>
        <Card><p>Interviews Scheduled: 15</p></Card>
        <Card><p>Profile Views: 1429</p></Card>
      </div>
    </div>
  );
}

import { Card } from "../components/ui/Card";

export default function SeekerDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Seeker Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card><p>Jobs Applied: 24</p></Card>
        <Card><p>Saved Jobs: 18</p></Card>
        <Card><p>Interviews: 5</p></Card>
        <Card><p>Profile Views: 156</p></Card>
      </div>
    </div>
  );
}

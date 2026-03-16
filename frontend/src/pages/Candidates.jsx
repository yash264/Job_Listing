import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { apiFetch } from "../utils/api";
import mockCandidates from "../data/candidates.json";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let mounted = true;
    apiFetch("/fetchCandidates")
      .then(data => { if (mounted && Array.isArray(data)) setCandidates(data); })
      .catch(() => { setCandidates(mockCandidates); });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Candidates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map(c => (
          <Card key={c._id || c.id}>
            <h3 className="font-semibold">{c.name}</h3>
            <p>{c.role}</p>
            <p>Experience: {c.experience}</p>
            <div className="mt-2">
              <a href={`/candidates/${c.id || c._id}`}><Button variant="secondary" size="sm">View Profile</Button></a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

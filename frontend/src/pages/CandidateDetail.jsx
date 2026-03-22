import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { apiFetch } from "../utils/api";
import mockCandidates from "../data/candidates.json";

export default function CandidateDetail() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    let mounted = true;
    apiFetch("/fetchProfile", {
      method: "POST",
      body: JSON.stringify({ jobRefId: id })
    })
      .then(data => { if (mounted) setCandidate(data); })
      .catch(() => {
        const found = mockCandidates.find(c => String(c.id) === String(id));
        setCandidate(found || { name: "Unknown", role: "N/A", location: "N/A", experience: "N/A", skills: "N/A" });
      });
    return () => (mounted = false);
  }, [id]);

  if (!candidate) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Candidate Profile</h2>
      <Card>
        <h3 className="font-semibold">{candidate.name}</h3>
        <p>{candidate.role}</p>
        <p>Location: {candidate.location || "—"}</p>
        <p>Experience: {candidate.experience}</p>
        <p>Skills: {candidate.skills || candidate.skillsList || "—"}</p>
        <div className="flex gap-4 mt-4">
          <Button variant="default">Download CV</Button>
          <Button variant="secondary">Schedule Interview</Button>
        </div>
      </Card>
    </div>
  );
}

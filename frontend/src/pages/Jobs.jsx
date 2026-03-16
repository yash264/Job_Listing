import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { apiFetch } from "../utils/api";
import mockJobs from "../data/jobs.json";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let mounted = true;
    apiFetch("/fetchJob")
      .then(data => { if (mounted && Array.isArray(data)) setJobs(data); })
      .catch(() => { setJobs(mockJobs); });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <Card key={job._id || job.id}>
            <h3 className="font-semibold">{job.role || job.title}</h3>
            <p>Company: {job.company || job.providerName || "—"}</p>
            <p>Location: {job.location || job.city || "Remote"}</p>
            <div className="mt-3">
              <Button variant="default" size="sm">Apply Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

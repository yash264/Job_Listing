import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { fetchJobs } from '../utils/api';

export default function Dashboard() {
  const [jobsCount, setJobsCount] = useState(0);

  useEffect(() => {
    fetchJobs()
      .then(res => {
        const data = res.data || {};
        const jobs = Array.isArray(data) ? data : data.jobs || [];
        setJobsCount(jobs.length);
      })
      .catch(() => setJobsCount(0));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <h3 className="text-lg font-semibold">Jobs</h3>
          <p className="text-3xl mt-2">{jobsCount}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Candidates</h3>
          <p className="text-3xl mt-2">—</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Activity</h3>
          <p className="text-sm mt-2 text-gray-500">No recent activity</p>
        </Card>
      </div>
    </div>
  );
}

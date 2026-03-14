import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { fetchJobs } from '../utils/api';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then(res => {
        const data = res.data || {};
        const list = Array.isArray(data) ? data : data.jobs || [];
        setJobs(list);
      })
      .catch(() => setJobs([]));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>
      <div className="space-y-3">
        {jobs.length === 0 && <Card>No jobs found</Card>}
        {jobs.map((job) => (
          <Card key={job._id || job.id}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{job.role || job.title}</h3>
                <p className="text-sm text-gray-600">{job.company || job.employer || ''}</p>
              </div>
              <div className="text-sm text-gray-500">{job.location || job.city || ''}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { fetchCandidates } from '../utils/api';
import { Link } from 'react-router-dom';

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates()
      .then(res => {
        const data = res.data || {};
        const list = Array.isArray(data) ? data : data.candidates || [];
        setCandidates(list);
      })
      .catch(() => setCandidates([]));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <div className="space-y-3">
        {candidates.length === 0 && <Card>No candidates found</Card>}
        {candidates.map(c => (
          <Card key={c._id || c.id}>
            <Link to={`/candidates/${c._id || c.id}`} className="block">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.title || c.currentRole}</p>
                </div>
                <div className="text-sm text-gray-500">{c.location}</div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

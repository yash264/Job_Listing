import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import client from '../utils/api';

export default function CandidateDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!id) return;
    // backend has /fetchProfile which expects jobRefId; if your backend supports fetching by candidate id, adjust accordingly
    client.post('/fetchProfile', { jobRefId: id })
      .then(res => setProfile(res.data || null))
      .catch(() => setProfile(null));
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Candidate Detail</h1>
      {!profile && <Card>Loading or no profile found</Card>}
      {profile && (
        <Card>
          <h2 className="text-lg font-semibold">{profile.name || profile.fullName}</h2>
          <p className="text-sm text-gray-600">{profile.title}</p>
          <div className="mt-3">
            <strong>Summary</strong>
            <p className="text-sm text-gray-700">{profile.summary || profile.about}</p>
          </div>
        </Card>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import client from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await client.post('/signup', { name, email, password });
      alert('Account created. Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <label className="block mb-2">Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 mb-4" />
        <label className="block mb-2">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-4" />
        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-4" />
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}

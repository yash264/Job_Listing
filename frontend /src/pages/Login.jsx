import React, { useState } from 'react';
import Button from '../components/ui/Button';
import client from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await client.post('/login', { email, password });
      const token = res.data?.token || res.data?.accessToken;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        alert('Login succeeded but no token returned');
      }
    } catch (err) {
      alert('Login failed');
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <label className="block mb-2">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-4" />
        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-4" />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}

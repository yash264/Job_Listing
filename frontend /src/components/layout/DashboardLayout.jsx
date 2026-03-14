import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-semibold mb-4">HireSathi</h2>
        <nav className="space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">Jobs</Link>
          <Link to="/candidates" className="block text-gray-700 hover:text-blue-600">Candidates</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white shadow-sm rounded p-4 ${className}`}>
      {children}
    </div>
  );
}

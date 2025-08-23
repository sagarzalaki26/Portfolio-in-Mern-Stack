
import React from 'react';
import { FaProjectDiagram, FaCertificate, FaTools } from 'react-icons/fa';

export default function Sidebar({ active, setActive }) {
  return (
    <div className="h-full bg-gray-800 text-white p-4 space-y-6 w-64">
      <div>
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <p className="text-sm text-gray-400">Manage content</p>
      </div>

      <nav className="space-y-2">
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded ${
            active === 'projects'
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          onClick={() => setActive('projects')}
        >
          <FaProjectDiagram /> Projects
        </button>
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded ${
            active === 'certificates'
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          onClick={() => setActive('certificates')}
        >
          <FaCertificate /> Certificates
        </button>
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded ${
            active === 'skills'
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          onClick={() => setActive('skills')}
        >
          <FaTools /> Skills
        </button>
      </nav>

     
    </div>
  );
}

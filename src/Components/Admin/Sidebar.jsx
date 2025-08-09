// src/components/Admin/Sidebar.jsx
import React from 'react';
import { FaProjectDiagram, FaCertificate, FaTools, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ active, setActive, onLogout }) {
  const items = [
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
  ];

  return (
    <aside className="w-72 bg-gray-900 text-white hidden md:flex flex-col p-6 gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <p className="text-sm opacity-70 mt-1">Manage content</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.id}>
              <button
                onClick={() => setActive(it.id)}
                className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg transition 
                  ${active === it.id ? 'bg-gray-800' : 'hover:bg-gray-800/50'}`}
              >
                <span className="text-lg">{it.icon}</span>
                <span className="font-medium">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

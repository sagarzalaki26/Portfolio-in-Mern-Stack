import React, { useEffect, useState } from 'react';
import { loadProjects, saveProjects } from './storage';
import { FaPlus, FaEdit, FaTrash, FaExternalLinkAlt } from 'react-icons/fa';

const blank = { id: '', title: '', description: '', link: '' };

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setProjects(loadProjects());
  }, []);

  const persist = (arr) => {
    setProjects(arr);
    saveProjects(arr);
  };

  const handleAdd = () => {
    if (!form.title.trim()) return alert('Title required');
    const newItem = { ...form, id: Date.now().toString() };
    persist([newItem, ...projects]);
    setForm(blank);
    setShowForm(false);
  };

  const handleUpdate = () => {
    const arr = projects.map((p) => (p.id === editingId ? { ...p, ...form } : p));
    persist(arr);
    setEditingId(null);
    setForm(blank);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this project?')) return;
    const arr = projects.filter((p) => p.id !== id);
    persist(arr);
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setForm({ title: p.title, description: p.description, link: p.link });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Manage Projects</h3>
        <div className="flex items-center gap-3">
          <button onClick={() => { setShowForm((s) => !s); setEditingId(null); setForm(blank); }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded">
            <FaPlus /> <span>{showForm ? 'Close' : 'Add Project'}</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white/5 p-4 rounded shadow">
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Project title" className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" />
          <input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="Project link (github/site)" className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" />
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Short description" rows="3" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"></textarea>
          <div className="flex gap-2">
            {editingId ? (
              <button onClick={handleUpdate} className="bg-yellow-600 px-4 py-2 rounded">Update</button>
            ) : (
              <button onClick={handleAdd} className="bg-green-600 px-4 py-2 rounded">Save</button>
            )}
            <button onClick={() => { setShowForm(false); setForm(blank); setEditingId(null); }} className="bg-gray-700 px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {projects.length === 0 && <div className="text-sm opacity-70">No projects added yet.</div>}

        {projects.map((p) => (
          <div key={p.id} className="bg-white/5 p-4 rounded flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm opacity-80 mb-2">{p.description}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 text-sm">
                  View <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>

            <div className="flex gap-2">
              <button onClick={() => startEdit(p)} className="px-3 py-1 bg-yellow-600 rounded flex items-center gap-2"><FaEdit /> Edit</button>
              <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-600 rounded flex items-center gap-2"><FaTrash /> Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

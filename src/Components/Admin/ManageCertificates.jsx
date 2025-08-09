// src/components/Admin/ManageCertificates.jsx
import React, { useEffect, useState } from 'react';
import { loadCertificates, saveCertificates } from './storage';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const blank = { id: '', title: '', description: '', file: '' };

export default function ManageCertificates() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(loadCertificates());
  }, []);

  const persist = (arr) => { setItems(arr); saveCertificates(arr); };

  const add = () => {
    if (!form.title.trim()) return alert('Title required');
    const newItem = { ...form, id: Date.now().toString() };
    persist([newItem, ...items]);
    setForm(blank);
    setOpen(false);
  };

  const update = () => {
    const arr = items.map(i => i.id === editingId ? { ...i, ...form } : i);
    persist(arr);
    setEditingId(null);
    setForm(blank);
    setOpen(false);
  };

  const remove = (id) => {
    if (!confirm('Delete certificate?')) return;
    persist(items.filter(i => i.id !== id));
  };

  const startEdit = (it) => {
    setEditingId(it.id);
    setForm({ title: it.title, description: it.description, file: it.file });
    setOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Manage Certificates</h3>
        <button onClick={() => { setOpen(s => !s); setEditingId(null); setForm(blank); }} className="flex items-center gap-2 bg-blue-600 px-3 py-2 rounded">
          <FaPlus /> <span>{open ? 'Close' : 'Add Certificate'}</span>
        </button>
      </div>

      {open && (
        <div className="bg-white/5 p-4 rounded">
          <input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} placeholder="Certificate Title" className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" />
          <input value={form.file} onChange={(e) => setForm({...form, file: e.target.value})} placeholder="File URL (optional)" className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" />
          <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder="Short description" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" rows="3" />
          <div className="flex gap-2">
            {editingId ? <button onClick={update} className="bg-yellow-600 px-4 py-2 rounded">Update</button> : <button onClick={add} className="bg-green-600 px-4 py-2 rounded">Save</button>}
            <button onClick={() => { setOpen(false); setForm(blank); setEditingId(null); }} className="bg-gray-700 px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {items.length === 0 && <div className="text-sm opacity-70">No certificates yet.</div>}
        {items.map(it => (
          <div key={it.id} className="bg-white/5 p-4 rounded flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-sm opacity-80">{it.description}</p>
              {it.file && <a href={it.file} target="_blank" rel="noreferrer" className="text-blue-400 text-sm">Open</a>}
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(it)} className="px-3 py-1 bg-yellow-600 rounded"><FaEdit /></button>
              <button onClick={() => remove(it.id)} className="px-3 py-1 bg-red-600 rounded"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

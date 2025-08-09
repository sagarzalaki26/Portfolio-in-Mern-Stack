// src/components/Admin/ManageSkills.jsx
import React, { useEffect, useState } from 'react';
import { loadSkills, saveSkills } from './storage';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: '', level: 60 });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => setSkills(loadSkills()), []);

  const persist = (arr) => { setSkills(arr); saveSkills(arr); };

  const add = () => {
    if (!form.name.trim()) return alert('Skill name required');
    const newSkill = { id: Date.now().toString(), ...form };
    persist([newSkill, ...skills]);
    setForm({ name: '', level: 60 });
  };

  const startEdit = (s) => {
    setEditingId(s.id);
    setForm({ name: s.name, level: s.level });
  };

  const update = () => {
    persist(skills.map(s => s.id === editingId ? { ...s, ...form } : s));
    setForm({ name: '', level: 50 });
    setEditingId(null);
  };

  const remove = (id) => {
    if (!confirm('Delete skill?')) return;
    persist(skills.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Manage Skills</h3>
        <div className="flex gap-2">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Skill name" className="px-3 py-2 rounded bg-gray-800 text-white" />
          <input type="number" value={form.level} onChange={(e) => setForm({ ...form, level: Number(e.target.value) })} min="0" max="100" className="w-24 px-3 py-2 rounded bg-gray-800 text-white placeholder:Skills in %" />
          {editingId ? (
            <button onClick={update} className="bg-yellow-600 px-3 py-2 rounded">Update</button>
          ) : (
            <button onClick={add} className="bg-green-600 px-3 py-2 rounded flex items-center gap-2"><FaPlus /> Add</button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {skills.length === 0 && <div className="opacity-70">No skills added.</div>}
        {skills.map(s => (
          <div key={s.id} className="p-3 rounded bg-white/5 flex justify-between items-center">
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm opacity-80">{s.level}%</div>
              <div className="w-full bg-gray-700 h-2 rounded mt-2 overflow-hidden">
                <div style={{ width: `${s.level}%` }} className="h-2 bg-green-500"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(s)} className="px-3 py-1 bg-yellow-600 rounded"><FaEdit /></button>
              <button onClick={() => remove(s.id)} className="px-3 py-1 bg-red-600 rounded"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';

export default function AddSkillForm() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(60);
  const [message, setMessage] = useState('');

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMessage('Skill name is required.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:3001/skill', { name, level });
      setMessage(res.data.message || 'Skill added successfully!');
      setName('');
      setLevel(60);
    } catch (error) {
      console.error(error);
      setMessage('Error adding skill.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Skill</h2>

        {message && (
          <p
            className={`mb-6 text-center ${
              message.toLowerCase().includes('error') ? 'text-red-400' : 'text-green-400'
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleAddSkill} className="space-y-5">
          {/* Skill Name */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Skill Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter skill name"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Skill Level */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="level">
              Skill Level (%)
            </label>
            <input
              id="level"
              type="number"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              min="0"
              max="100"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-2 rounded-md font-semibold text-white"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
}

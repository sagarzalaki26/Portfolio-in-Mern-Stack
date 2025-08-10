import React, { useState } from "react";
import axios from "axios";

const AddCertificateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Title is required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/certificate", {
        title,
        description,
        link,
      });
            setMessage(response.data.message);
            setTitle("");
            setDescription('');
            setLink('');

    } catch (error) {
      setMessage("Error adding Certificate.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen   bg-gray-950 px-4">
      <div className="bg-gray-800 p-8 rounded-lg ml-10 mt-8 shadow-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Certificate</h2>

        {message && (
          <p
            className={`mb-6 text-center ${
              message.toLowerCase().includes("error") ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium" htmlFor="title">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="Enter project description"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="link">
              Link
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-2 rounded-md font-semibold text-white"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCertificateForm;

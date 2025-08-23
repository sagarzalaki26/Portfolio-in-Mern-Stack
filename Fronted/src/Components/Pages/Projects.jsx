import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('https://portfolio-in-react-omega.vercel.app/projects');
        setProjects(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-gray-950 py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto p-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">My Projects</h2>
        <p className="text-lg mb-12 opacity-80">Some of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg overflow-hidden group border border-gray-700 hover:border-purple-500"
            >
              {/* Project Icon */}
              <div className="flex justify-center mt-6">
                <FaProjectDiagram className="text-5xl text-green-400 group-hover:animate-bounce" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-white transition mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 opacity-80 mb-4">{project.description}</p>

                {/* Technologies (optional if API gives tech stack) */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-700/40 text-purple-200 border border-purple-500/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-2 rounded-full text-white font-semibold transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";

const iconMap = {
  "HTML": <FaCode className="text-orange-500 text-4xl" />,
  "CSS": <FaCode className="text-blue-500 text-4xl" />,
  "JavaScript": <FaJs className="text-yellow-400 text-4xl" />,
  "React": <FaReact className="text-blue-400 text-4xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
  "MongoDB": <FaDatabase className="text-green-400 text-4xl" />
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:3001/fetchskill");
        setSkills(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="bg-gray-950 py-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-400">
          My Skills
        </h2>
        <p className="text-lg mb-10 opacity-80">Technologies I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`} // unique key
              className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Skill Icon */}
                {iconMap[skill.name] || <FaCode className="text-gray-400 text-3xl" />}

                <h3 className="text-xl font-semibold">{skill.name}</h3>

                {/* Circular Progress */}
                <div className="relative w-24 h-24">
                  <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40"
                      stroke="gray"
                      strokeWidth="6"
                      fill="none"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - skill.level / 100)}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100) }}
                      transition={{ duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

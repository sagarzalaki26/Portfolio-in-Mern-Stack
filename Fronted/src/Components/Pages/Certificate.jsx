import React, { useEffect, useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import axios from 'axios';
import { motion } from "framer-motion";

const Certificates = () => {
    const [certificate, setCertificate] = useState([]);

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                const res = await axios.get('https://portfolio-in-react-omega.vercel.app/certificate');
                setCertificate(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCertificate();
    }, []);

    return (
        <section
            id="certificates"
            className="bg-gray-950 py-16"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto p-8 text-center text-white">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-6 text-purple-400"
                >
                    My Certificates
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg mb-12 opacity-80"
                >
                    Explore my verified certificates in programming and development.
                </motion.p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificate.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all group"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <FaCertificate className="text-5xl text-yellow-400 group-hover:rotate-12 transition-transform" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>

                            {/* Description */}
                            <p className="text-sm opacity-80 mb-6">{cert.description}</p>

                            {/* Button */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all shadow-md"
                            >
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

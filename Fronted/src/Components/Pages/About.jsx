import React from 'react';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="bg-gray-950 py-20" data-aos="fade-up">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 relative inline-block">
                    About Me
                    <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-x-1/2"></span>
                </h2>

                {/* Card */}
                <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-gray-700 hover:shadow-purple-500/20 transition duration-300">
                    <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-200">
                        I'm <strong className="text-purple-400">Sagar Zalaki</strong>, a passionate{" "}
                        <span className="text-blue-400 font-semibold">MERN Stack Developer</span>.  
                        I love building <span className="text-pink-400">responsive</span>, 
                        <span className="text-yellow-300"> user-friendly</span> applications and solving 
                        real-world problems with <span className="text-purple-300">clean code</span> and 
                        <span className="text-blue-300"> innovative solutions</span>.  
                        With experience across both web and mobile platforms, I bring versatility and a 
                        continuous drive to learn modern tools for delivering high-quality software.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {/* Clean Code */}
                        <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 hover:border-blue-400 transition duration-300 group">
                            <FaCode className="text-4xl text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-semibold text-white text-xl mb-2">Clean Code</h3>
                            <p className="text-sm text-gray-400">Writing maintainable and efficient code</p>
                        </div>

                        {/* Innovation */}
                        <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 hover:border-yellow-400 transition duration-300 group">
                            <FaLightbulb className="text-4xl text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-semibold text-white text-xl mb-2">Innovation</h3>
                            <p className="text-sm text-gray-400">Creative solutions to complex problems</p>
                        </div>

                        {/* Growth */}
                        <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 hover:border-green-400 transition duration-300 group">
                            <FaRocket className="text-4xl text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-semibold text-white text-xl mb-2">Growth</h3>
                            <p className="text-sm text-gray-400">Continuously learning new technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

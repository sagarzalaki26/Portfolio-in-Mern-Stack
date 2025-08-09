import React from 'react';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="bg-gray-950" data-aos="fade-up">
            <div className='max-w-4xl mx-auto p-8 text-center'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl text-white">
                    <p className="text-lg mb-6 leading-relaxed">
                        I'm <strong>Sagar Zalaki</strong>, passionate Frontend Web Developer and Android Developer with a strong focus
                        on building responsive, user-friendly applications. I enjoy solving real-world problems through clean code and
                        innovative solutions. With experience in both web and mobile platforms, I bring versatility to development projects
                        and constantly strive to enhance my skills. I also believe in continuous learning and leveraging modern tools
                        to deliver efficient, high-quality software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                            <FaCode className="text-3xl text-blue-400 mb-2 mx-auto" />
                            <h3 className="font-semibold">Clean Code</h3>
                            <p className="text-sm opacity-80">Writing maintainable and efficient code</p>
                        </div>

                        <div className="text-center">
                            <FaLightbulb className="text-3xl text-yellow-400 mb-2 mx-auto" />
                            <h3 className="font-semibold">Innovation</h3>
                            <p className="text-sm opacity-80">Creative solutions to complex problems</p>
                        </div>

                        <div className="text-center">
                            <FaRocket className="text-3xl text-green-400 mb-2 mx-auto" />
                            <h3 className="font-semibold">Growth</h3>
                            <p className="text-sm opacity-80">Continuously learning new technologies</p>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default About;

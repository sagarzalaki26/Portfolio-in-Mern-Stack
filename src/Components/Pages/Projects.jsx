import React from 'react';
import {
    FaHospital,
    FaUtensils,
    FaAddressCard,
    FaCar,
    FaMoneyBillWave,
    FaTheaterMasks,
} from 'react-icons/fa';

const projects = [
    {
        icon: <FaHospital className="text-green-400" />,
        title: 'Hospital Website with Blog System',
        description:
            'Developed a Hospital Website with an integrated Blog System to provide hospital information, manage services, and share health-related articles.',
        link: 'https://github.com/sagarzalaki26/Phyioteraphy',
    },
    {
        icon: <FaUtensils className="text-green-400" />,
        title: 'Famous Foods of 5 States Website',
        description:
            'Built a website featuring famous foods, ingredients, and cooking instructions for 5 states.',
        link: 'https://github.com/sagarzalaki26/Spicies',
    },
    {
        icon: <FaAddressCard className="text-green-400" />,
        title: 'My Portfolio',
        description:
            'Designed and implemented a portfolio website to showcase technical skills and creativity.',
        link: 'https://github.com/sagarzalaki26/Portfolio',
    },
    {
        icon: <FaCar className="text-green-400" />,
        title: 'Car Game',
        description:
            'Simple car game developed using C language with engaging gameplay mechanics.',
        link: 'https://github.com/sagarzalaki26/cproject',
    },
    {
        icon: <FaMoneyBillWave className="text-green-400" />,
        title: 'Payroll System',
        description:
            'Comprehensive payroll management system developed in C++ with advanced features.',
        link: 'https://github.com/sagarzalaki26/CPP-project',
    },
    {
        icon: <FaTheaterMasks className="text-green-400" />,
        title: 'Theater Management',
        description:
            'Theater ticket booking system using C++ with user-friendly interface.',
        link: 'https://github.com/sagarzalaki26/CPP-project',
    },
];

const Projects = () => {
    return (
        <section id="projects" className=" bg-gray-950" data-aos="fade-up">
            <div className=' max-w-6xl mx-auto p-8 text-center text-white'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">My Projects</h2>
                <p className="text-lg mb-8 opacity-80">Some of my recent work</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-xl transition-transform hover:scale-105"
                        >
                            <div className="text-4xl mb-4 animate-bounce">{project.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                            <p className="mb-4 opacity-80">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold inline-block"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

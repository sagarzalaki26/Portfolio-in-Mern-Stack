import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const certificateList = [
    {
        title: 'Web Development',
        description:
            'Certificate for completing Frontend Development with HTML, CSS, JavaScript.',
        link: '#',
    },
    {
        title: 'Java Programming',
        description: 'Certificate for completing Java Programming course.',
        link: '#',
    },
    {
        title: 'C Programming',
        description: 'Certificate for completing C Programming Fundamentals.',
        link: '#',
    },
    {
        title: 'Python Programming',
        description: 'Certificate for completing Python Programming Fundamentals.',
        link: '/images/Basics of python.pdf',
    },
];

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="  bg-gray-950 "
            data-aos="fade-up"

        >
            <div className='max-w-6xl mx-auto p-8 text-center text-white'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">My Certificates</h2>
                <p className="text-lg mb-8 opacity-80">
                    Explore my verified certificates in programming and development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificateList.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-xl transition-transform hover:scale-105"
                        >
                            <FaCertificate className="text-5xl text-yellow-400 mb-4  mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                            <p className="text-sm opacity-80 mb-4">{cert.description}</p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold inline-block"
                            >
                                View
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

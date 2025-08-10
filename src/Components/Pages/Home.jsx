import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaChevronDown } from 'react-icons/fa';
import profileImg from '../../assets/Sagar.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left px-6 md:px-16 relative overflow-hidden gap-6 md:gap-16"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      {/* Text Content */}
      <div className="relative z-10 animate-fadeInUp mt-16 md:mt-0 md:ml-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-red-500 typing-animation">Sagar Zalaki</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-80">Frontend Developer</p>

        <div className="flex space-x-6 text-3xl justify-center md:justify-start mb-6">
          <a href="https://in.linkedin.com/in/sagar-zalaki-403339285" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sagarzalaki26" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sagar.zalaki.9/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://en-gb.facebook.com/sagar.zalaki.9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a>
        </div>

        <div className="flex justify-center md:justify-start">
          <a
            href="/sagar_resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 flex-1 animate-fadeInUp mt-8 md:mt-0">
        <img
          src={profileImg}
          alt="Sagar Zalaki"
          className="max-w-[200px] md:max-w-[300px] rounded-full object-cover mx-auto md:mx-0 shadow-xl"
        />
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <FaChevronDown className="text-2xl opacity-50" />
      </div>
    </section>

  );
};

export default Home;

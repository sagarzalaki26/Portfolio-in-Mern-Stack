import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaChevronDown,
} from "react-icons/fa";
import profileImg from "../../assets/Sagar.jpg";


const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left px-6 md:px-16 overflow-hidden gap-10"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900/40 to-purple-900/40 backdrop-blur-sm"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-xl animate-fadeInUp mt-20 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-red-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text animate-gradient">
            Sagar Zalaki
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Mern Stack Developer | Crafting modern web experiences
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-3xl justify-center md:justify-start mb-8">
          <a
            href="https://in.linkedin.com/in/sagar-zalaki-403339285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sagarzalaki26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sagar.zalaki.9/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://en-gb.facebook.com/sagar.zalaki.9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/sagar_resume.pdf"
            download
            className="relative inline-block px-8 py-3 font-semibold rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-blue-500 transition-all duration-300"></span>
            <span className="relative text-white">Download Resume</span>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 animate-fadeInUp mt-10 md:mt-0 mb-26">
        <div className="relative w-[220px] md:w-[300px] h-[220px] md:h-[300px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <img
            src={profileImg}
            alt="Sagar Zalaki"
            className="relative w-80 h-64 md:w-80 md:h-80 rounded-full object-contain shadow-2xl border-4 border-gray-800 mx-auto"
          />

        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <FaChevronDown className="text-2xl opacity-70" />
      </div>
    </section>
  );
};

export default Home;

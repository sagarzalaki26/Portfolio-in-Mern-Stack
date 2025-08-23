import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center py-10 mt-0 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-2xl">
          <a
            href="https://github.com/sagarzalaki26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://in.linkedin.com/in/sagar-zalaki-403339285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sagar.zalaki.9/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://en-gb.facebook.com/sagar.zalaki.9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="opacity-70 text-sm">&copy; {new Date().getFullYear()} Sagar Zalaki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

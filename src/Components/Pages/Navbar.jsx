import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'certificates', label: 'Certificates' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
    
  ];

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800/90 backdrop-blur-sm shadow-lg fixed w-full z-10 animate-fadeInUp">
        <h1 className="text-2xl ml-8 font-bold text-white animate-pulse">
          Sagar Zalaki
        </h1>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className=" text-white text-xl cursor-pointer hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
          <Link className='border-2xl rounded-xl text-white text-xl p-1 bg-green-400 cursor-pointer hover:text-black'>Admin</Link>
        </div>

        <button
          className="md:hidden text-2xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800/95 backdrop-blur-sm shadow-lg absolute w-full mt-16 p-4 space-y-4 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-400 py-2"
            >
              {link.label}
            </Link>
          ))}
           <Link to='login' className='border-green-400 cursor-pointer hover:text-blue-400'>Admin</Link>

        </div>
      )}
    </>
  );
};

export default Navbar;

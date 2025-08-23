import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "certificates", label: "Certificates" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg fixed w-full z-50">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer hover:text-blue-400 transition-colors">
          Sagar <span className="text-blue-400">Zalaki</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg font-medium cursor-pointer relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-1.5 rounded-lg text-lg font-semibold bg-gradient-to-r from-green-400 to-green-500 text-black hover:opacity-90 transition"
          >
            Admin
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 text-white bg-gray-900/95 flex flex-col p-8 space-y-8 z-40 pt-24">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer text-2xl hover:text-blue-400 text-center"
            >
              {link.label}
            </ScrollLink>
          ))}
          <RouterLink
            to="/login"
            onClick={toggleMenu}
            className="text-2xl hover:text-green-400 text-center"
          >
            Admin
          </RouterLink>
        </div>
      )}
    </>
  );
};

export default Navbar;

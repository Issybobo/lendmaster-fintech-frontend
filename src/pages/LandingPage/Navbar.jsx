import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white px-8 py-4 shadow-md fixed w-full z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <Link to="/" className="hover:text-gray-300">
            <img src={logo} alt="Logo" className="w-24 h-20" />
          </Link>
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

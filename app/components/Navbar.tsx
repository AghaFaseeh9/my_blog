"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo/Brand */}
        <Link href="/" aria-label="Go to homepage">
          <div className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-all">
            Blog
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" aria-label="Go to homepage">
              <p className="hover:text-gray-400 cursor-pointer transition-all">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About us">
              <p className="hover:text-gray-400 cursor-pointer transition-all">About</p>
            </Link>
          </li>
          <li>
            <Link href="/services" aria-label="Our services">
              <p className="hover:text-gray-400 cursor-pointer transition-all">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact us">
              <p className="hover:text-gray-400 cursor-pointer transition-all">Contact</p>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 py-4 bg-gray-800 rounded-md shadow-lg transition-all">
          <li>
            <Link href="/" aria-label="Go to homepage">
              <p className="block hover:text-gray-400 cursor-pointer transition-all">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About us">
              <p className="block hover:text-gray-400 cursor-pointer transition-all">About</p>
            </Link>
          </li>
          <li>
            <Link href="/services" aria-label="Our services">
              <p className="block hover:text-gray-400 cursor-pointer transition-all">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact us">
              <p className="block hover:text-gray-400 cursor-pointer transition-all">Contact</p>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

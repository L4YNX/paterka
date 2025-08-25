// NavBar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const links = [
  { name: "Strona Główna", path: "/paterka/" },
  { name: "O nas", path: "/paterka/o_nas" },
  { name: "Oferta", path: "/paterka/oferta" },
  { name: "Kontakt", path: "/paterka/kontakt" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-20 px-11">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-15" />
          <span
            className="text-6xl text-rose-900 font-bold"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Paterka
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 text-3xl text-rose-900">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-rose-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* większy burger */}
            {isMenuOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg transform transition-transform duration-300 z-50
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Krzyżyk do zamykania w prawym górnym rogu */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-rose-900 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={36} />
          </button>
        </div>

        {/* Linki */}
        <div className="flex flex-col p-6 space-y-6 mt-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl text-rose-900 hover:text-gray-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

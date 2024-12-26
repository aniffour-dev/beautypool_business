"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">fresha</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">
            Sign up for free
          </a>
          <a href="#" className="hover:underline">
            Login
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            More
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white py-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Sign up for free
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Login
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Pricing
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            More
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

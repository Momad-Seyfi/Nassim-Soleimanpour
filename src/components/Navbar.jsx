import React, { useState } from 'react';
import { Magnet, Menu, X } from 'lucide-react';

export function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block w-full px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Magnet className="h-8 w-8 text-brand-red" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent truncate">
              Nassim Soleimanpour
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#works">Works</NavLink>
            <NavLink href="#performances">Performances</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-blue"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col divide-y divide-gray-200">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#works" onClick={closeMenu}>Works</NavLink>
            <NavLink href="#performances" onClick={closeMenu}>Performances</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
'use client';
import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { Sun, Moon } from 'lucide-react';

export const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Empowering Her', href: '#empowering' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Team', href: '#team' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <nav className={`w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="flex items-center">
          <Image
            src="/photo.webp"
            alt="Logo"
            width={48}
            height={48}
            className={`rounded-full object-cover border-2 ${theme === 'dark' ? 'border-yellow-400' : 'border-yellow-400'}`}
          />
          <span className={`ml-3 font-bold text-xl tracking-wide ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Company</span>
        </div>
        <div className="flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 font-medium text-lg ${theme === 'dark' ? 'text-white hover:text-yellow-400' : 'text-black hover:text-yellow-400'}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-yellow-400 bg-transparent hover:bg-yellow-400/20 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-yellow-400" />}
          </button>
        </div>
      </nav>
    </ThemeContext.Provider>
  );
} 
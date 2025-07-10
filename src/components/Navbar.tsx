'use client';
import React from 'react';
import Image from 'next/image';

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
  return (
    <nav className="w-full bg-black flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center">
        <Image
          src="/photo.webp"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-yellow-400"
        />
        <span className="ml-3 text-white font-bold text-xl tracking-wide">Company</span>
      </div>
      <div className="flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium text-lg"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
} 
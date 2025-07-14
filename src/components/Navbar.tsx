"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Empowering Her", href: "#empowering" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`
        w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 fixed top-0 left-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled ? "shadow-xl backdrop-blur-md" : "shadow-lg"}
        ${
          theme === "dark"
            ? `bg-black/90 ${isScrolled ? "bg-black/95" : ""}`
            : `bg-white/90 ${isScrolled ? "bg-white/95" : ""}`
        }
      `}
    >
      {/* Logo Section */}
      <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center group">
        <div className="relative">
          <Image
            src="/logo.jpg"
            alt="Ozone Entertainments Logo"
            width={220}
            height={60}
            className="object-contain h-16 w-[220px] drop-shadow-lg"
            priority
          />
        </div>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              relative transition-all duration-300 font-medium text-base lg:text-lg group
              ${theme === "dark" ? "text-white hover:text-yellow-400" : "text-black hover:text-yellow-400"}
            `}
          >
            {link.name}
            {/* Underline animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}

        {/* Enhanced Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`
            relative ml-4 p-2.5 sm:p-3 rounded-full border-2 border-yellow-400 
            transition-all duration-300 ease-in-out group
            hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
            active:scale-95
            ${
              theme === "dark"
                ? "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-black"
                : "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-white"
            }
          `}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {/* Background glow effect */}
          <div
            className={`
              absolute inset-0 rounded-full bg-yellow-400 transition-all duration-300 ease-in-out
              ${theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-10"}
            `}
          />

          {/* Icon container with rotation */}
          <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
            {/* Sun icon */}
            <Sun
              className={`
                w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 absolute transition-all duration-300 ease-in-out
                ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
              `}
            />

            {/* Moon icon */}
            <Moon
              className={`
                w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 absolute transition-all duration-300 ease-in-out
                ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
              `}
            />
          </div>

          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-yellow-400 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-300" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        {/* Theme Toggle for Mobile */}
        <button
          onClick={toggleTheme}
          className={`
            relative p-2 rounded-full border-2 border-yellow-400 
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
            active:scale-95
            ${
              theme === "dark"
                ? "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-black"
                : "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-white"
            }
          `}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            <Sun
              className={`
                w-5 h-5 text-yellow-400 absolute transition-all duration-300 ease-in-out
                ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
              `}
            />
            <Moon
              className={`
                w-5 h-5 text-yellow-400 absolute transition-all duration-300 ease-in-out
                ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
              `}
            />
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`
            p-2 rounded-lg border-2 border-yellow-400 transition-all duration-300
            hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
            ${
              theme === "dark"
                ? "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-black"
                : "bg-transparent hover:bg-yellow-400/10 focus:ring-offset-white"
            }
          `}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-yellow-400" />
          ) : (
            <Menu className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`
            absolute top-full left-0 w-full md:hidden
            transition-all duration-300 ease-in-out
            ${
              theme === "dark"
                ? "bg-black/95 backdrop-blur-md border-t border-gray-800"
                : "bg-white/95 backdrop-blur-md border-t border-gray-200"
            }
          `}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavLinkClick}
                className={`
                  block py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg
                  hover:bg-yellow-400/10 hover:text-yellow-400
                  ${theme === "dark" ? "text-white" : "text-black"}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"

import type React from "react"

import { useState, createContext, useEffect } from "react"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"

// Export the context and types
export const ThemeContext = createContext({
  theme: "dark" as "dark" | "light",
  toggleTheme: () => {},
})

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Empowering Her", href: "#empowering" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Team", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

// Theme Provider Component - This will wrap the entire app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    }
  }, [])

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Navbar Component - Now just consumes the context
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <nav
          className={`
            w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 
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
          <div className="flex items-center group">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Logo"
                width={48}
                height={48}
                className={`
                  rounded-full object-cover border-2 transition-all duration-300
                  group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-400/25
                  ${theme === "dark" ? "border-yellow-400" : "border-yellow-400"}
                `}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
            </div>
            <span
              className={`
                ml-3 font-bold text-xl tracking-wide transition-colors duration-300
                ${theme === "dark" ? "text-white" : "text-black"}
              `}
            >
              Company
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative transition-all duration-300 font-medium text-lg group
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
                relative ml-4 p-3 rounded-full border-2 border-yellow-400 
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
              <div className="relative flex items-center justify-center w-6 h-6">
                {/* Sun icon */}
                <Sun
                  className={`
                    w-6 h-6 text-yellow-400 absolute transition-all duration-300 ease-in-out
                    ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
                  `}
                />

                {/* Moon icon */}
                <Moon
                  className={`
                    w-6 h-6 text-yellow-400 absolute transition-all duration-300 ease-in-out
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
        </nav>
      )}
    </ThemeContext.Consumer>
  )
}

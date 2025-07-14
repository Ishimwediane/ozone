"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeContext"

interface ThemeToggleProps {
  variant?: "floating" | "inline" | "navbar"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function ThemeToggle({ variant = "floating", size = "md", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-3.5",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const baseClasses = `
    relative rounded-full border-2 border-yellow-400 
    transition-all duration-300 ease-in-out
    hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25
    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
    active:scale-95
    ${sizeClasses[size]}
    ${
      theme === "dark"
        ? "bg-black text-yellow-400 hover:bg-yellow-400/10 focus:ring-offset-black"
        : "bg-white text-yellow-400 hover:bg-yellow-400/10 focus:ring-offset-white"
    }
  `

  const variantClasses = {
    floating: "fixed bottom-6 right-6 z-50 shadow-xl",
    inline: "inline-flex",
    navbar: "inline-flex",
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Background circle animation */}
      <div
        className={`
          absolute inset-0 rounded-full bg-yellow-400 transition-all duration-300 ease-in-out
          ${theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-20"}
        `}
      />

      {/* Icon container with rotation animation */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Sun icon */}
        <Sun
          className={`
            ${iconSizes[size]} absolute transition-all duration-300 ease-in-out
            ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
          `}
        />

        {/* Moon icon */}
        <Moon
          className={`
            ${iconSizes[size]} absolute transition-all duration-300 ease-in-out
            ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
          `}
        />
      </div>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={`
            absolute inset-0 bg-yellow-400 rounded-full transition-all duration-300 ease-out
            scale-0 opacity-0 hover:scale-100 hover:opacity-10
          `}
        />
      </div>
    </button>
  )
}

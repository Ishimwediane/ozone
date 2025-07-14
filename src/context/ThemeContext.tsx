"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    // Check for stored theme or system preference
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const systemPrefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false
    
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    } else if (systemPrefersDark) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    // Apply theme to HTML element
    if (typeof window !== "undefined") {
      const html = document.documentElement
      html.classList.remove("light", "dark")
      html.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
export { ThemeContext }

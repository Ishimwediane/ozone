"use client"

import { useTheme } from "./ThemeContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"

export function ThemeDemo() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Theme Demo</h1>
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className={`transition-colors ${
              theme === "dark" ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            className={`transition-colors ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <CardHeader>
              <CardTitle className={theme === "dark" ? "text-white" : "text-gray-900"}>Current Theme</CardTitle>
              <CardDescription className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                The active theme setting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-semibold capitalize ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {theme}
              </p>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <CardHeader>
              <CardTitle className={theme === "dark" ? "text-white" : "text-gray-900"}>Background Color</CardTitle>
              <CardDescription className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                Changes based on theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`w-full h-20 rounded-md border-2 border-dashed ${
                  theme === "dark" ? "bg-gray-900 border-gray-600" : "bg-gray-50 border-gray-300"
                }`}
              />
            </CardContent>
          </Card>

          <Card
            className={`transition-colors ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <CardHeader>
              <CardTitle className={theme === "dark" ? "text-white" : "text-gray-900"}>Text Color</CardTitle>
              <CardDescription className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                Adapts for readability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={theme === "dark" ? "text-white" : "text-gray-900"}>
                This text changes color based on the current theme to ensure optimal readability.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Theme Features
          </h2>
          <ul className={`space-y-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>• Persists theme preference in localStorage</li>
            <li>• Smooth transitions between themes</li>
            <li>• Responsive design that works in both modes</li>
            <li>• Accessible color contrast ratios</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

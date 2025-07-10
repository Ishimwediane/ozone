"use client"

import Image from "next/image"
import { Play, Award, Users, Camera } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function HeroSection() {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      id="hero"
      className={`relative mt-21 min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${theme === "dark" ? "opacity-5" : "opacity-10"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent`}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                  Creative Excellence
                </span>
              </div>

              <h1
                className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                CAPTURING
                <span className="block text-yellow-400">MOMENTS</span>
                <span className="block">EMPOWERING</span>
                <span className="block text-yellow-400">DREAMS</span>
              </h1>

              <p
                className={`text-xl leading-relaxed max-w-lg transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Professional photography, videography, modeling, and event management services. We specialize in
                empowering women through creative storytelling and visual excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div
                  className={`text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div
                  className={`text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Events
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100+</div>
                <div
                  className={`text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Models
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25">
                View Portfolio
              </button>
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2 bg-transparent">
                <Play className="w-5 h-5" />
                <span>Watch Reel</span>
              </button>
            </div>

            {/* Services Icons */}
            <div className="flex items-center space-x-8 pt-6">
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Camera className="w-5 h-5" />
                <span className="text-sm">Photography</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Play className="w-5 h-5" />
                <span className="text-sm">Videography</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Users className="w-5 h-5" />
                <span className="text-sm">Modeling</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Award className="w-5 h-5" />
                <span className="text-sm">Events</span>
              </div>
            </div>
          </div>

          {/* Right Content - Shaped Image */}
          <div className="relative lg:ml-12">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-yellow-400/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400/20 rounded-full"></div>

            {/* Main Image Container with Custom Shape */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-3xl transform -rotate-2"></div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/10">
                <Image
                  src="/model.webp?height=800&width=600"
                  alt="Professional Creative Services"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
                  ✨ Empowering Women
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-8 bg-yellow-400 text-black p-3 rounded-lg shadow-lg">
              <Camera className="w-6 h-6" />
            </div>
            <div className="absolute bottom-1/4 -right-8 bg-black border-2 border-yellow-400 text-yellow-400 p-3 rounded-lg shadow-lg">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>
    </section>
  )
}

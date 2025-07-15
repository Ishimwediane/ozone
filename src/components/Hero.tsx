"use client"

import Image from "next/image"
import { Play, Award, Users, Camera } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section
      id="hero"
      className={`relative mt-16 sm:mt-26 min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${theme === "dark" ? "opacity-5" : "opacity-10"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent`}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 sm:w-12 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-xs sm:text-sm ${theme === 'dark' ? '' : 'text-yellow-600'}">
                  Ozone entertainment
                </span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                CAPTURING
                <span className="block text-yellow-400 ${theme === 'dark' ? '' : 'text-yellow-600'}">MOMENTS</span>
                <span className="block">EMPOWERING</span>
                <span className="block text-yellow-400 ${theme === 'dark' ? '' : 'text-yellow-600'}">DREAMS</span>
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Professional photography, videography, modeling, and event management services. We specialize in
                empowering women through creative storytelling and visual excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}">10+</div>
                <div
                  className={`text-xs sm:text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">3</div>
                <div
                  className={`text-xs sm:text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Events
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">20+</div>
                <div
                  className={`text-xs sm:text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
                  Models
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                className="${theme === 'dark' ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-yellow-500 hover:bg-yellow-600'} text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
                onClick={() => {
                  const gallery = document.getElementById('gallery');
                  if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Go to Gallery
              </button>
            </div>

            {/* Services Icons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 sm:pt-6">
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Photography</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Videography</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Modeling</span>
              </div>
              <div
                className={`flex items-center space-x-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Events</span>
              </div>
            </div>
          </div>

          {/* Right Content - Shaped Image */}
          <div className="relative lg:ml-12 mt-8 lg:mt-0">
            {/* Decorative Elements */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-yellow-400/30 rounded-full"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-400/20 rounded-full"></div>

            {/* Main Image Container with Custom Shape */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-2xl sm:rounded-3xl transform -rotate-2"></div>

              {/* Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/10">
                <Image
                  src="/model.jpg?height=800&width=600"
                  alt="Professional Creative Services"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                {/* Floating Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/80 backdrop-blur-sm text-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-yellow-400/30">
                  ✨ Empowering Her
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-4 sm:-left-8 bg-yellow-400 text-black p-2 sm:p-3 rounded-lg shadow-lg">
              <Camera className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="absolute bottom-1/4 -right-4 sm:-right-8 bg-black border-2 border-yellow-400 text-yellow-400 p-2 sm:p-3 rounded-lg shadow-lg">
              <Award className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>
    </section>
  )
}

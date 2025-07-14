"use client"

import { useRef, useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"

export default function VideoHero() {
  const [isMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {} // do nothing if not using scrollY
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        src="/video.mp4"
      />
      <div className="relative z-10 flex flex-col w-full h-full bg-black/40 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-md mb-4 mt-16 sm:mt-20 text-center sm:text-left">MODELING POWER</h1>
        
        <div className="flex gap-3 sm:gap-4 mt-16 sm:mt-20 justify-center sm:justify-start">
          <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-300 transition-colors duration-300 text-sm sm:text-base">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  )
}

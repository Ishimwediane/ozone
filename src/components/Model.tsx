"use client"

import { useRef, useState, useEffect } from "react"
//import { VolumeX, Volume2, ChevronUp } from "lucide-react"

export default function VideoHero() {
  const [isMuted] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
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
      <div className="relative z-10 flex flex-col  w-full h-full bg-black/40  px-6">
        <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-md mb-4 mt-20" >MODELING POWER</h1>
        
        <div className="flex gap-4 mt-20 ">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">
            Explore Now
          </button>
          
        </div>
      </div>
    </section>
  )
}

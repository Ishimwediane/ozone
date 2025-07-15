"use client"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

const photos = [
 "/photo.jpg",
 "/photo1.jpg",
 "/photo2.jpg",
 "/photo3.jpg",
 "/photo4.jpg",
 "/photo5.jpg",
]

const films = [
  "/filme2.jpg",
  "/filme.jpg",
  "/filme3.jpg"
  
]

const eventImages = [
  "/umurava.mp4",
  "/event.jpg",
]

const artistImages = [
  "/artist1.jpg",
  "/artist2.jpg",
  
]

const fashionImages = [
  "/video.mp4",
  "/fash.mp4",
  "/fash.jpg",
  "/fash1.jpg",
  "/fash2.jpg",
]

export default function Gallery() {
  const [tab, setTab] = useState<'photos' | 'film' | 'event' | 'artist' | 'fashion'>('photos')
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const { theme } = useTheme()

  let images: string[] = []
  if (tab === 'photos') images = photos
  else if (tab === 'film') images = films
  else if (tab === 'event') images = eventImages
  else if (tab === 'artist') images = artistImages
  else if (tab === 'fashion') images = fashionImages

  return (
    <section id="gallery" className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} py-12 sm:py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold font-serif mb-6 sm:mb-8 text-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>Gallery</h2>
        <div className="flex justify-center mb-6 sm:mb-8 gap-3 sm:gap-4">
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 ${tab === 'photos' ? (theme === 'dark' ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-yellow-500 text-black border-yellow-500') : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-600 border-yellow-500/40 hover:bg-yellow-500/10'}`}
            onClick={() => setTab('photos')}
          >
            Photos
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 ${tab === 'film' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('film')}
          >
            Film
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 ${tab === 'event' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('event')}
          >
            Event
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 ${tab === 'artist' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('artist')}
          >
            Artist
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 ${tab === 'fashion' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('fashion')}
          >
            Fashion
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, idx) => (
            <div key={idx} className={`relative group overflow-hidden shadow-lg rounded-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              {src.endsWith('.mp4') ? (
                <video src={src} className="object-cover w-full h-full max-w-[300px] max-h-[200px] mx-auto" width={300} height={200} muted autoPlay loop playsInline />
              ) : (
                <Image src={src} alt="Gallery" width={300} height={200} className="object-cover w-full h-full max-w-[300px] max-h-[200px] mx-auto" />
              )}
              {/* Enable + icon/modal for all tabs */}
              <button
                onClick={() => setOpenIdx(idx)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Zoom image"
                tabIndex={0}
              >
                <Plus className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 bg-black/70 rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-yellow-400 hover:text-black transition" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal/Lightbox for all except artist */}
      {openIdx !== null && tab !== 'artist' && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setOpenIdx(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/70 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full p-2 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          {images[openIdx].endsWith('.mp4') ? (
            <video
              src={images[openIdx]}
              controls
              autoPlay
              className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-lg"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <Image
              src={images[openIdx]}
              alt="Gallery Large"
              width={800}
              height={600}
              className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-lg"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
      )}
    </section>
  )
}
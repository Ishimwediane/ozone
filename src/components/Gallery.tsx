"use client"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { useState, useContext } from "react"
import { ThemeContext } from "./Navbar"

const photos = [
  "/model.webp",
  "/model1.webp",
  "/nature.webp",
  "/photo.webp",
  "/ocean.jpg",
]

const films = [
  "/film.jpg",
  "/filme2.jpg",
  "/filme3.jpg",
  "/filme1.jpg",
]

export default function Gallery() {
  const [tab, setTab] = useState<'photos' | 'film'>('photos')
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const { theme } = useContext(ThemeContext)

  const images = tab === 'photos' ? photos : films

  return (
    <section id="gallery" className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold font-serif mb-8 text-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-400'}`}>Gallery</h2>
        <div className="flex justify-center mb-8 gap-4">
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all border-2 ${tab === 'photos' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('photos')}
          >
            Photos
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all border-2 ${tab === 'film' ? 'bg-yellow-400 text-black border-yellow-400' : theme === 'dark' ? 'bg-black text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10' : 'bg-white text-yellow-400 border-yellow-400/40 hover:bg-yellow-400/10'}`}
            onClick={() => setTab('film')}
          >
            Film
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className={`relative group overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <Image src={src} alt="Gallery" width={400} height={300} className="object-cover w-full h-full" />
              <button
                onClick={() => setOpenIdx(idx)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Zoom image"
                tabIndex={0}
              >
                <Plus className="w-12 h-12 text-yellow-400 bg-black/70 rounded-full p-2 shadow-lg hover:bg-yellow-400 hover:text-black transition" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal/Lightbox */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center">
          <button
            onClick={() => setOpenIdx(null)}
            className="absolute top-6 right-6 bg-black/70 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full p-2 transition"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <Image
            src={images[openIdx]}
            alt="Gallery Large"
            width={800}
            height={600}
            className="max-h-[80vh] w-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  )
}
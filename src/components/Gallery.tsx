"use client"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { useState } from "react"

const images = [
  { id: "1", src: "/model.webp", alt: "Model" },
  { id: "2", src: "/model1.webp", alt: "Model 1" },
  { id: "3", src: "/nature.webp", alt: "Nature" },
  { id: "4", src: "/ocean.webp", alt: "Ocean" },
  { id: "5", src: "/photo.webp", alt: "Photo" },
  // Add more as needed
]

export default function Gallery() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openImage = images.find((img) => img.id === openId)

  return (
    <section className="bg-black py-16 px-4" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 text-center tracking-wide">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-xl border-2 border-yellow-400/10 shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={500}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <button
                onClick={() => setOpenId(img.id)}
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
      {openImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center">
          <button
            onClick={() => setOpenId(null)}
            className="absolute top-6 right-6 bg-black/70 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full p-2 transition"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <Image
            src={openImage.src}
            alt={openImage.alt}
            width={800}
            height={1000}
            className="max-h-[80vh] w-auto rounded-xl border-2 border-yellow-400/20 shadow-2xl"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  )
}
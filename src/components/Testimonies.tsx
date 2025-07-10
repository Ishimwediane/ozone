"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Kayla Bryant",
    image: "/images/kayla-bryant.png",
    quote:
      "There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The service exceeded all my expectations. Professional, reliable, and truly outstanding results that transformed our business completely.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence is unmatched in the industry.",
  },
]

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 bg-black">
      <div className="text-center relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-400 border border-yellow-400 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Main Testimonial Content */}
        <div className="flex-1">
          {/* Header with yellow underline */}
          <div className="mb-12">
            <div className="inline-block">
              <h2 className="text-4xl font-serif text-yellow-400 mb-2">Testimonials</h2>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-yellow-400">
              <Image
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-serif text-yellow-400 mb-6">{testimonials[currentTestimonial].name}</h3>

          {/* Testimonial Quote */}
          <blockquote className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light min-h-[4rem]">
            "{testimonials[currentTestimonial].quote}"
          </blockquote>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-colors inline-block ${
                  index === currentTestimonial ? "bg-yellow-400" : "bg-yellow-400/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-400 border border-yellow-400 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

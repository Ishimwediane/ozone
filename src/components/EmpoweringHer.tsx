import Image from "next/image"
import { useTheme } from "../context/ThemeContext"

export default function EmpoweringHer() {
  const { theme } = useTheme()

  return (
    <section className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} py-12 sm:py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className={`text-3xl sm:text-4xl font-bold font-serif mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>Empowering Women Through Creativity</h2>
          <p className={`text-base sm:text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our initiative is dedicated to uplifting women by providing creative training, mentorship, and opportunities in photography, videography, and modeling. We believe in the power of creativity to transform lives and communities.
          </p>
          <button
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Partner With Us
          </button>
        </div>
        {/* Right: Overlapping Media */}
        <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
          {/* Image in back */}
          <div className="absolute left-4 sm:left-8 top-12 sm:top-16 lg:left-32 lg:top-20 w-40 h-40 sm:w-56 sm:h-56 lg:w-[420px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-xl bg-black z-0">
            <Image src="/videography.jpg" alt="Empowering Women" fill className="object-cover" />
          </div>

          {/* Video in front, bottom-right overlay */}
          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 lg:bottom-2 w-48 h-36 sm:w-60 sm:h-44 lg:w-[320px] lg:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl bg-black z-10">
            <video
              src="/videography.mp4"
              controls
              autoPlay
              muted
              className="w-full h-full object-cover bg-black"
              poster="/vid.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 
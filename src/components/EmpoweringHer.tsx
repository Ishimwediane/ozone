import Image from "next/image"

export default function EmpoweringHer() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 font-serif mb-4">Empowering Women Through Creativity</h2>
          <p className="text-gray-300 text-lg mb-6">
            Our initiative is dedicated to uplifting women by providing creative training, mentorship, and opportunities in photography, videography, and modeling. We believe in the power of creativity to transform lives and communities.
          </p>
          <div className="flex items-center space-x-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400">300+</div>
              <div className="text-sm text-gray-400">Women Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-400">Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">20+</div>
              <div className="text-sm text-gray-400">Mentors</div>
            </div>
          </div>
          <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all">Partner With Us</button>
        </div>
        {/* Right: Overlapping Media */}
        <div className="relative flex justify-center items-center min-h-[420px] md:min-h-[520px]">
  {/* Image in back */}
  <div className="absolute left-8 top-16 md:left-32 md:top-20 w-56 h-56 md:w-[420px] md:h-[320px] rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-xl bg-black z-0">
    <Image src="/videography.jpg" alt="Empowering Women" fill className="object-cover" />
  </div>

  {/* Video in front, bottom-right overlay */}
  <div className="absolute -bottom-4 -left-4 md:bottom-2 w-60 h-44 md:w-[320px] md:h-[240px] rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl bg-black z-10">
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
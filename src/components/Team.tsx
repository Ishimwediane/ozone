import Image from "next/image"
import { Star, Sparkles, Award, Camera } from "lucide-react"

const team = [
  {
    name: "Amina Yusuf",
    role: "Founder & CEO",
    image: "/model.webp",
    specialty: "Creative Vision",
    experience: "8+ Years",
  },
  {
    name: "Lina Okafor",
    role: "Creative Director",
    image: "/model1.webp",
    specialty: "Art Direction",
    experience: "6+ Years",
  },
  {
    name: "Sara Chen",
    role: "Project Manager",
    image: "/nature.webp",
    specialty: "Event Planning",
    experience: "5+ Years",
  },
]

export default function Team() {
  return (
    <section id="team" className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-yellow-400/8 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/20 rounded-full"></div>
      <div className="absolute top-40 right-16 w-12 h-12 bg-yellow-400/10 rounded-full"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border border-yellow-400/30 rounded-lg rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-yellow-400/15 rounded-full"></div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-8 bg-yellow-400/20 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/30">
        <Star className="w-5 h-5 text-yellow-400" />
      </div>
      <div className="absolute top-1/3 right-12 bg-black/80 backdrop-blur-sm p-3 rounded-full border border-yellow-400/40">
        <Sparkles className="w-5 h-5 text-yellow-400" />
      </div>
      <div className="absolute bottom-1/3 left-16 bg-yellow-400/15 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/25">
        <Camera className="w-5 h-5 text-yellow-400" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-0.5 bg-yellow-400"></div>
            <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">Our Team</span>
            <div className="w-12 h-0.5 bg-yellow-400"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
            Meet Our <span className="text-yellow-400">Creative</span> Team
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate professionals dedicated to empowering women and delivering creative excellence through innovative
            storytelling.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Background Decorative Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>

              {/* Main Card */}
              <div className="relative bg-black/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/10 group-hover:shadow-yellow-400/20 transition-all duration-300 group-hover:border-yellow-400/50">
                {/* Floating Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                  {member.experience}
                </div>

                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-lg group-hover:border-yellow-400 transition-colors duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-yellow-400/20 animate-pulse"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-yellow-400 font-serif group-hover:text-yellow-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-lg font-medium">{member.role}</p>
                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <Award className="w-4 h-4" />
                    <span>{member.specialty}</span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              </div>

              {/* Side Decorative Elements */}
              {idx === 1 && (
                <>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400/20 rounded-full hidden lg:block"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-yellow-400/30 rounded-full hidden lg:block"></div>
                </>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

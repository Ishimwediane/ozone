import Image from "next/image"
import { Star, Sparkles, Award, Camera } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const team = [
  {
    name: "Augustin HATEGEKIMANA",
    role: "Founder & CEO",
    image: "/AUGY1.jpg",
  
  },
  {
    name: "Solange ABAYISENGA",
    role: "Founder & Chief financial officerand secretary",
    image: "/Solange .jpg",
   
  },
  {
    name: "Nadine IGIHOZO",
    role: "Founder & Chief marketing officer",
    image: "/IGIHOZO.jpg",
   
  },
]

export default function Team() {
  const { theme } = useTheme()

  return (
    <section id="team" className={`relative ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} py-16 sm:py-20 px-4 overflow-hidden transition-colors duration-300`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-yellow-400/8 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border-2 border-yellow-400/20 rounded-full"></div>
      <div className="absolute top-32 sm:top-40 right-8 sm:right-16 w-8 sm:w-12 h-8 sm:h-12 bg-yellow-400/10 rounded-full"></div>
      <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 border border-yellow-400/30 rounded-lg rotate-45"></div>
      <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 border-2 border-yellow-400/15 rounded-full"></div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-4 sm:left-8 bg-yellow-400/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-yellow-400/30">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      </div>
      <div className="absolute top-1/3 right-6 sm:right-12 bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-yellow-400/40">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      </div>
      <div className="absolute bottom-1/3 left-8 sm:left-16 bg-yellow-400/15 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-yellow-400/25">
        <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 sm:w-12 h-0.5 bg-yellow-400"></div>
            <span className="text-yellow-400 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Team</span>
            <div className="w-8 sm:w-12 h-0.5 bg-yellow-400"></div>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Meet Our <span className="text-yellow-400">Creative</span> Team
          </h2>

          <p className={`text-base sm:text-xl leading-relaxed max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate professionals dedicated to empowering women and delivering creative excellence through innovative
            storytelling.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Background Decorative Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 rounded-2xl sm:rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-2xl sm:rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>

              {/* Main Card */}
              <div className={`relative ${theme === 'dark' ? 'bg-black/60' : 'bg-white/80'} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/10 group-hover:shadow-yellow-400/20 transition-all duration-300 group-hover:border-yellow-400/50`}>
                {/* Floating Badge removed */}

                {/* Profile Image */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-lg group-hover:border-yellow-400 transition-colors duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-yellow-400/20 animate-pulse"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 font-serif group-hover:text-yellow-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm sm:text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{member.role}</p>
                  <div className={`flex items-center justify-center space-x-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              </div>

              {/* Side Decorative Elements */}
              {idx === 1 && (
                <>
                  <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-yellow-400/20 rounded-full hidden lg:block"></div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-6 sm:w-8 h-6 sm:h-8 border-2 border-yellow-400/30 rounded-full hidden lg:block"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

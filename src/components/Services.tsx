import { FaRegCalendarAlt, FaUserTie, FaFilm, FaUsers, FaHandHoldingHeart } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const services = [
  {
    name: "Event Organizer",
    icon: <FaRegCalendarAlt className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
    desc: "Professional event planning and management for unforgettable experiences.",
  },
  {
    name: "Fashion Agency",
    icon: <FaUserTie className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
    desc: "We recruit top models for NAF MODEL EMPIRE, provide them with training, and help them find agencies to advance their careers.",
  },
  {
    name: "Film Production",
    icon: <FaFilm className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
    desc: "Creative film and video production services for all occasions.",
  },
  {
    name: "Artist Management",
    icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
    desc: "Supporting and promoting artists to reach their full potential.",
  },
  {
    name: "Empowering Her",
    icon: <FaHandHoldingHeart className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
    desc: "Initiatives and programs dedicated to empowering women through creativity.",
  },
]

export default function Services() {
  const { theme } = useTheme()
  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} py-12 sm:py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto text-center">
        <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <img src="/logo.jpg" alt="Logo" className="mx-auto mb-4 w-24 h-24 object-contain rounded-full shadow-lg cursor-pointer" />
        </a>
        <h2 className={`text-3xl sm:text-4xl font-bold font-serif mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-400'}`}>Our Services</h2>
        <p className={`text-base sm:text-lg mb-8 sm:mb-10 px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Explore the range of creative and empowering services we offer.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`p-6 sm:p-8 flex flex-col items-start shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${theme === 'dark' ? 'bg-yellow-400/10 hover:bg-yellow-400/20' : 'bg-yellow-100 hover:bg-yellow-200'}`}>
              <div className="mb-4">{service.icon}</div>
              <h3 className={`text-lg sm:text-xl font-bold font-serif mb-2 text-left ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>{service.name}</h3>
              <p className={`text-sm sm:text-base text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
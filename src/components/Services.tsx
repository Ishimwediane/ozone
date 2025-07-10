import { FaRegCalendarAlt, FaUserTie, FaFilm, FaUsers, FaHandHoldingHeart } from "react-icons/fa"
import { useContext } from "react"
import { ThemeContext } from "./Navbar"

const services = [
  {
    name: "Event Organizer",
    icon: <FaRegCalendarAlt className="w-8 h-8 text-yellow-400" />,
    desc: "Professional event planning and management for unforgettable experiences.",
  },
  {
    name: "Fashion Agency",
    icon: <FaUserTie className="w-8 h-8 text-yellow-400" />,
    desc: "Connecting top talent with leading brands in the fashion industry.",
  },
  {
    name: "Film Production",
    icon: <FaFilm className="w-8 h-8 text-yellow-400" />,
    desc: "Creative film and video production services for all occasions.",
  },
  {
    name: "Artist Management",
    icon: <FaUsers className="w-8 h-8 text-yellow-400" />,
    desc: "Supporting and promoting artists to reach their full potential.",
  },
  {
    name: "Empowering Her",
    icon: <FaHandHoldingHeart className="w-8 h-8 text-yellow-400" />,
    desc: "Initiatives and programs dedicated to empowering women through creativity.",
  },
]

export default function Services() {
  const { theme } = useContext(ThemeContext)
  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} py-16 px-4`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold font-serif mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-400'}`}>Our Services</h2>
        <p className={`text-lg mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Explore the range of creative and empowering services we offer.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`p-8 flex flex-col items-start shadow-lg bg-yellow-400/10 ${theme === 'dark' ? '' : 'bg-yellow-100'}`}>
              <div className="mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold font-serif mb-2 text-left ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>{service.name}</h3>
              <p className={`text-sm text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
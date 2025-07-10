import { FaRegCalendarAlt, FaUserTie, FaFilm, FaUsers, FaHandHoldingHeart } from "react-icons/fa"

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
  return (
    <section id="services" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 font-serif mb-4">Our Services</h2>
        <p className="text-gray-300 text-lg mb-10">Explore the range of creative and empowering services we offer.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-yellow-400/10 rounded-2xl p-8 flex flex-col items-start shadow-lg">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2 font-serif text-left">{service.name}</h3>
              <p className="text-gray-300 text-sm text-left">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
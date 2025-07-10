import Image from "next/image"

const team = [
  {
    name: "Amina Yusuf",
    role: "Founder & CEO",
    image: "/model.webp",
  },
  {
    name: "Lina Okafor",
    role: "Creative Director",
    image: "/model1.webp",
  },
  {
    name: "Sara Chen",
    role: "Project Manager",
    image: "/nature.webp",
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 font-serif mb-4">Meet Our Team</h2>
        <p className="text-gray-300 text-lg mb-10">Passionate professionals dedicated to empowering women and delivering creative excellence.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-yellow-400/10 rounded-2xl p-6 flex flex-col items-center shadow-lg border-2 border-yellow-400">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-400 mb-4">
                <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-1 font-serif">{member.name}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
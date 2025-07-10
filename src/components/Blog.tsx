import Image from "next/image"

const posts = [
  {
    id: 1,
    image: "/ocean.jpg",
    title: "Published in the April issue of the prestigious journal BRAVACASA 2015",
    date: "3 May 2015",
    description: "Featured in BRAVACASA 2015 for our spring interior design project, highlighting freshness, emotion, and personality.",
  },
  {
    id: 2,
    image: "/model.webp",
    title: "The process of furnishing the apartment 'Cozy'",
    date: "9 March 2015",
    description: "A behind-the-scenes look at how we transformed a blank space into a warm, inviting home.",
  },
  {
    id: 3,
    image: "/nature.webp",
    title: "Process work penthouse square 'Manastirski livadi'",
    date: "13 January 2015",
    description: "Modern design and custom solutions for a penthouse in Manastirski livadi.",
  },
  {
    id: 4,
    image: "/photo.webp",
    title: "Installation of furniture in the apartment 'Lozenets' Sofia",
    date: "26 November 2014",
    description: "Efficient and stylish furniture installation for a contemporary Sofia apartment.",
  },
]

export default function Blog() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center font-serif">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-yellow-400/10 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
              <div className="relative w-full h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{post.title}</h3>
                <p className="text-xs text-gray-400 mb-2 font-medium">{post.date}</p>
                <p className="text-gray-200 text-sm flex-1">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
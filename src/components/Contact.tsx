import React from "react"

export default function Contact() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Info & Map */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-yellow-400 font-serif mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <span className="block text-gray-300 font-medium">Call us:</span>
              <a href="tel:+0888520472" className="text-yellow-400 text-lg font-semibold hover:underline">(088) 852 04 72</a>
            </div>
            <div>
              <span className="block text-gray-300 font-medium">Email us:</span>
              <a href="mailto:info@example.com" className="text-yellow-400 text-lg font-semibold hover:underline">info@example.com</a>
            </div>
            <div>
              <span className="block text-gray-300 font-medium">Location:</span>
              <span className="text-yellow-400 text-lg font-semibold">Sofia, Bulgaria</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-yellow-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.377964878165!2d30.100291!3d-1.940893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca73d2df48ff7%3A0x5c6957621a18a4bb!2sKimironko%2C%20Kigali!5e0!3m2!1sen!2srw!4v1680000000000!5m2!1sen!2srw"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        {/* Right Side: Contact Form */}
        <form className="bg-yellow-400/10 rounded-xl p-8 flex flex-col space-y-6 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2 font-serif">Send us a message</h3>
          <input type="text" name="name" placeholder="Name" className="px-4 py-3 rounded bg-black text-yellow-400 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded bg-black text-yellow-400 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="text" name="subject" placeholder="Subject" className="px-4 py-3 rounded bg-black text-yellow-400 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <textarea name="message" placeholder="Message" rows={5} className="px-4 py-3 rounded bg-black text-yellow-400 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <button type="submit" className="bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  )
} 
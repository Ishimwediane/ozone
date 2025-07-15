import React, { useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function Contact() {
  const { theme } = useTheme()

  // Form state
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await fetch('https://ozone-backend-jpmo.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess('Your message has been sent!')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(data.message || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} py-12 sm:py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side: Contact Info & Map */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className={`text-2xl sm:text-3xl font-bold text-yellow-400 font-serif mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>Contact Information</h2>
          <div className="space-y-4">
            <div>
              <span className={`block font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Call us:</span>
              <a href="tel:+0888520472" className="text-yellow-400 text-base sm:text-lg font-semibold hover:underline">+250 798 287 085
              </a>
            </div>
            <div>
              <span className={`block font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email us:</span>
              <a href="mailto:info@example.com" className="text-yellow-400 text-base sm:text-lg font-semibold hover:underline">ozoneentertainments1@gmail.com
              </a>
            </div>
            <div>
              <span className={`block font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Location:</span>
              <span className="text-yellow-400 text-base sm:text-lg font-semibold">Kimironko, Kigali</span>
            </div>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden border-2 border-yellow-400">
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
        <form onSubmit={handleSubmit} className={`${theme === 'dark' ? 'bg-yellow-400/10' : 'bg-white'} rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col space-y-4 sm:space-y-6 shadow-lg transition-colors duration-300`}>
          <h3 className={`text-xl sm:text-2xl font-bold font-serif mb-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>Send us a message</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={form.name}
            onChange={handleChange}
            className={`px-4 py-3 rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-yellow-400' : 'bg-gray-50 text-gray-900'}`} 
            required 
            disabled={loading}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={form.email}
            onChange={handleChange}
            className={`px-4 py-3 rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-yellow-400' : 'bg-gray-50 text-gray-900'}`} 
            required 
            disabled={loading}
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={form.subject}
            onChange={handleChange}
            className={`px-4 py-3 rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-yellow-400' : 'bg-gray-50 text-gray-900'}`} 
            required 
            disabled={loading}
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows={5} 
            value={form.message}
            onChange={handleChange}
            className={`px-4 py-3 rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-yellow-400' : 'bg-gray-50 text-gray-900'}`} 
            required 
            disabled={loading}
          />
          <button 
            type="submit" 
            className="bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <div className="text-green-600 font-medium text-sm pt-2">{success}</div>}
          {error && <div className="text-red-600 font-medium text-sm pt-2">{error}</div>}
        </form>
      </div>
    </section>
  )
} 
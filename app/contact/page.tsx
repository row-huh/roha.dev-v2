import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-400">Get In Touch</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to help achieve company goals. Let's connect and discuss opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-emerald-400 mr-4" size={20} />
                  <div>
                    <p className="text-zinc-300 font-medium">Email</p>
                    <a
                      href="mailto:roha.pathan125@gmail.com"
                      className="text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      roha.pathan125@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-emerald-400 mr-4" size={20} />
                  <div>
                    <p className="text-zinc-300 font-medium">Phone</p>
                    <a href="tel:+923257007071" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                      +92 325 7007071
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-emerald-400 mr-4" size={20} />
                  <div>
                    <p className="text-zinc-300 font-medium">Location</p>
                    <p className="text-zinc-400">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.github.com/row-huh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-emerald-500/50 transition-all group"
                >
                  <Github className="text-emerald-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-zinc-300 font-medium">GitHub</p>
                    <p className="text-zinc-500 text-sm">row-huh</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/roha-pathan-687960272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-emerald-500/50 transition-all group"
                >
                  <Linkedin className="text-emerald-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-zinc-300 font-medium">LinkedIn</p>
                    <p className="text-zinc-500 text-sm">roha-pathan</p>
                  </div>
                </a>

                <a
                  href="https://www.roha.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-emerald-500/50 transition-all group col-span-2"
                >
                  <Globe className="text-emerald-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-zinc-300 font-medium">Website</p>
                    <p className="text-zinc-500 text-sm">www.roha.dev</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-lg font-bold text-emerald-400 mb-3">Quick Info</h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>🎓 Software Engineering Student</li>
                <li>💼 Seeking Backend/Data Engineering Internships</li>
                <li>🚀 Available for immediate opportunities</li>
                <li>⏰ Response time: Usually within 24 hours</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Send a Message</h2>

            <form className="space-y-6" action="https://formspree.io/f/your-form-id" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg focus:border-emerald-500 focus:outline-none text-zinc-100 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg focus:border-emerald-500 focus:outline-none text-zinc-100 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg focus:border-emerald-500 focus:outline-none text-zinc-100 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg focus:border-emerald-500 focus:outline-none text-zinc-100 transition-colors resize-none"
                  placeholder="Tell me about the opportunity, project, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            <p className="text-xs text-zinc-500 mt-4 text-center">
              I'll get back to you as soon as possible. Usually within 24 hours!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

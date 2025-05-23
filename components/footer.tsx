import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-emerald-400 font-bold text-xl">roha.dev</span>
            <p className="text-zinc-400 mt-2">Building the future, one line of code at a time.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Roha.dev. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

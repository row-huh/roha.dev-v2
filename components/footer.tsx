import { Github, Linkedin, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">roha.dev</h3>
            <p className="text-zinc-400 text-sm">Backend & Data Engineering Student</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.github.com/row-huh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/roha-pathan-687960272/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:roha.pathan125@gmail.com"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.roha.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Website"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
          <p className="text-zinc-500 text-sm">© 2024 Roha Pathan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-emerald-400 font-bold text-xl">roha.dev</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden md:flex space-x-3">
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            <button
              className="md:hidden p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 border-b border-zinc-700">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block text-zinc-300 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-zinc-300 hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="block text-zinc-300 hover:text-emerald-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="block text-zinc-300 hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block text-zinc-300 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4 pt-4 border-t border-zinc-700">
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

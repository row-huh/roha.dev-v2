"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-emerald-400 font-bold text-xl">
              roha.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-zinc-300 hover:text-emerald-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/blog"
                className="text-zinc-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-zinc-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

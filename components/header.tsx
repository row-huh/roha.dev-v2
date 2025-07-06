"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Download, Loader2 } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadText, setDownloadText] = useState("Download Resume")

  const downloadMessages = [
    "Compressing life achievements...",
    "Optimizing career highlights...",
    "Formatting professional experiences...",
    "Bundling skills and certifications...",
    "Generating PDF masterpiece...",
    "Almost there...",
  ]

  const handleResumeDownload = async () => {
    setIsDownloading(true)

    // Cycle through funny loading messages
    for (let i = 0; i < downloadMessages.length; i++) {
      setDownloadText(downloadMessages[i])
      await new Promise((resolve) => setTimeout(resolve, 800))
    }

    // Simulate actual download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your actual resume file
    link.download = "Roha_Pathan_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloadText("Downloaded! 🎉")
    setTimeout(() => {
      setIsDownloading(false)
      setDownloadText("Download Resume")
    }, 2000)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Add your theme switching logic here
    document.documentElement.classList.toggle("light")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">
            <span className="text-emerald-400">roha</span>
            <span className="text-zinc-100">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/blog" className="text-zinc-300 hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-zinc-300 hover:text-emerald-400 transition-colors">
            Contact
          </Link>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Resume Download Button */}
          <Button
            onClick={handleResumeDownload}
            disabled={isDownloading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {isDownloading ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                {downloadText}
              </>
            ) : (
              <>
                <Download size={16} className="mr-2" />
                {downloadText}
              </>
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle Mobile */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-zinc-300">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/blog"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Resume Button */}
                <Button
                  onClick={() => {
                    handleResumeDownload()
                    setIsOpen(false)
                  }}
                  disabled={isDownloading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      {downloadText}
                    </>
                  ) : (
                    <>
                      <Download size={16} className="mr-2" />
                      {downloadText}
                    </>
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

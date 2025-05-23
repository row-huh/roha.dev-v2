"use client"

import { useState, useEffect } from "react"

export function Terminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Simulate typing effect
  useEffect(() => {
    const messages = [
      "$ whoami",
      "roha",
      "$ cat about.txt",
      "Computer Science Student | 6th Semester",
      "Specializing in Web Development & Algorithms",
      "$ system_info --personal",
      "SYSTEM INFO:",
      "OS: Human v22.0",
      "CPU: Brain (Overclocked)",
      "RAM: Caffeine-Dependent",
      "Languages: JavaScript, Python, TypeScript, Java",
      "Frameworks: React, Next.js, Node.js",
      "Status: Debugging life...",
      "$ _",
    ]

    let lineIndex = 0
    let charIndex = 0

    const typingInterval = setInterval(() => {
      if (lineIndex < messages.length) {
        if (charIndex === 0) {
          setCurrentLine("")
        }

        if (charIndex < messages[lineIndex].length) {
          setCurrentLine((prev) => prev + messages[lineIndex][charIndex])
          charIndex++
        } else {
          setLines((prev) => [...prev, currentLine])
          lineIndex++
          charIndex = 0

          // Pause longer after completing a line
          clearInterval(typingInterval)
          setTimeout(() => {
            const newInterval = setInterval(() => {
              if (lineIndex < messages.length) {
                if (charIndex === 0) {
                  setCurrentLine("")
                }

                if (charIndex < messages[lineIndex].length) {
                  setCurrentLine((prev) => prev + messages[lineIndex][charIndex])
                  charIndex++
                } else {
                  setLines((prev) => [...prev, currentLine])
                  lineIndex++
                  charIndex = 0

                  clearInterval(newInterval)
                  setTimeout(() => typingInterval, 500)
                }
              } else {
                clearInterval(newInterval)
              }
            }, 30)
          }, 500)
        }
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-800 p-4 h-[350px] overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-zinc-500">roha@portfolio ~ </div>
      </div>
      <div className="font-mono text-sm text-emerald-300 h-full overflow-y-auto">
        {lines.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-zinc-300" : "text-emerald-300 ml-0"}>
            {line}
          </div>
        ))}
        <div className="flex">
          <span className="text-zinc-300">{currentLine}</span>
          {showCursor && <span className="text-emerald-400 ml-0.5">▋</span>}
        </div>
      </div>
    </div>
  )
}

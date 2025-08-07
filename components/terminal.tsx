"use client"

import { useState, useEffect, useRef } from "react"

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [userInput, setUserInput] = useState("")
  const [userHistory, setUserHistory] = useState<{ command: string; output: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = [
    { command: "whoami", output: "roha_pathan" },
    { command: "pwd", output: "/home/roha/portfolio" },
    { command: "ls -la skills/", output: "Python Java C Flask Django SQL AI/ML" },
    {
      command: "grep -r 'achievements' .",
      output: "updating this soon",
    },
    {
      command: "curl -s api.github.com/users/row-huh",
      output: '{"login": "row-huh", "projects": ""}',
    },
    { command: "echo $STATUS", output: "Building an LLM from scratch 🚀" },
    { command : "", output: "Available commands:\nwhoami\npwd\nskills\ngithub\nprojects\nsecret\nhelp\nclear" }
  ]

  const validCommands: Record<string, string> = {
    help: "Available commands:\nwhoami\npwd\nskills\ngithub\nprojects\nclear",
    whoami: "roha_pathan",
    pwd: "/home/roha/portfolio",
    skills: "Python Java C Flask Django SQL AI/ML",
    github: "https://github.com/row-huh",
    projects: "Neutral, Ampu-Fitness, MalamaAI",
    clear: "clear",
  }

  useEffect(() => {
    if (currentLine >= commands.length) return

    const timer = setInterval(() => {
      const cmd = commands[currentLine]
      const fullText = `$ ${cmd.command}\n${cmd.output}`

      if (currentChar < fullText.length) {
        setCurrentChar((prev) => prev + 1)
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setCurrentChar(0)
        }, 10)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentLine, currentChar])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    if (currentLine >= commands.length) {
      inputRef.current?.focus()
    }
  }, [currentLine])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = userInput.trim()
      if (!input) return

    if (input === "secret") {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXCgBwE%3D" 
    } else {
      const output = validCommands[input] ?? `command not found: ${input}`
      setUserHistory((prev) => [...prev, { command: input, output }])
    }


      setUserInput("")
    }
  }

  // Combine all typed characters into one slice
  const getAnimatedContent = () => {
    const cmd = commands[currentLine]
    const fullText = `$ ${cmd.command}\n${cmd.output}`
    const typed = fullText.slice(0, currentChar)
    const [typedCommand, ...outputLines] = typed.split("\n")
    const typedOutput = outputLines.join("\n")
    const isOutputStarted = currentChar > `$ ${cmd.command}\n`.length
    return { typedCommand, typedOutput, isOutputStarted }
  }

  return (
    <div className="bg-black rounded-lg p-6 font-mono text-sm border border-zinc-700 min-h-[400px]">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="ml-4 text-zinc-400 text-xs">roha@portfolio:~</div>
      </div>

      <div className="space-y-2">
        {/* Fully typed lines */}
        {commands.slice(0, currentLine).map((cmd, index) => (
          <div key={index}>
            <div className="text-emerald-400">$ {cmd.command}</div>
            <div className="text-zinc-300 whitespace-pre-line">{cmd.output}</div>
          </div>
        ))}

        {/* Currently typing line */}
        {currentLine < commands.length && (
          <div>
            <div className="text-emerald-400">
              $ {getAnimatedContent().typedCommand.replace("$ ", "")}
              {(!getAnimatedContent().isOutputStarted && showCursor) && (
                <span className="bg-emerald-400 text-black">█</span>
              )}
            </div>
            {getAnimatedContent().isOutputStarted && (
              <div className="text-zinc-300 whitespace-pre-line">
                {getAnimatedContent().typedOutput}
                {showCursor && <span className="bg-emerald-400 text-black">█</span>}
              </div>
            )}
          </div>
        )}

        {/* User-typed entries */}
        {currentLine >= commands.length &&
          userHistory.map((entry, i) => (
            <div key={i}>
              <div className="text-emerald-400">$ {entry.command}</div>
              <div className="text-zinc-300 whitespace-pre-line">{entry.output}</div>
            </div>
          ))}

        {/* Prompt input */}
        {currentLine >= commands.length && (
          <div className="flex text-emerald-400">
            <span>$</span>
            <input
              ref={inputRef}
              className="bg-transparent outline-none text-emerald-300 ml-2 flex-1"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {showCursor && !userInput && <span className="ml-1 bg-emerald-400 text-black">█</span>}
          </div>
        )}
      </div>
    </div>
  )
}

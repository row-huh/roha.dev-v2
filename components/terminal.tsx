"use client"

import { useState, useEffect } from "react"

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = [
    { command: "whoami", output: "roha_pathan" },
    { command: "pwd", output: "/home/roha/portfolio" },
    { command: "ls -la skills/", output: "Python Java C Flask Django SQL Vertex-AI" },
    { command: "cat education.txt", output: "UIT University - Software Engineering (Expected 2026)" },
    {
      command: "grep -r 'achievements' .",
      output:
        "updating this soon",
    },
    {
      command: "curl -s api.github.com/users/row-huh",
      output: '{"login": "row-huh", "projects": "Neutral, Ampu-Fitness, MalamaAI"}',
    },
    { command: "echo $STATUS", output: "Ready to help achieve company goals 🚀" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < commands.length) {
        const currentCommand = commands[currentLine]
        const fullText = `$ ${currentCommand.command}\n${currentCommand.output}`

        if (currentChar < fullText.length) {
          setCurrentChar(currentChar + 1)
        } else {
          setTimeout(() => {
            setCurrentLine(currentLine + 1)
            setCurrentChar(0)
          }, 1000)
        }
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentLine, currentChar])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(!showCursor)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [showCursor])

  return (
    <div className="bg-black rounded-lg p-6 font-mono text-sm border border-zinc-700">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-zinc-400 text-xs">roha@portfolio:~</div>
      </div>

      <div className="space-y-2">
        {commands.slice(0, currentLine).map((cmd, index) => (
          <div key={index}>
            <div className="text-emerald-400">$ {cmd.command}</div>
            <div className="text-zinc-300 whitespace-pre-line">{cmd.output}</div>
          </div>
        ))}

        {currentLine < commands.length && (
          <div>
            <div className="text-emerald-400">
              ${" "}
              {commands[currentLine].command.slice(
                0,
                Math.max(0, currentChar - commands[currentLine].command.length - 2),
              )}
            </div>
            {currentChar > commands[currentLine].command.length + 2 && (
              <div className="text-zinc-300 whitespace-pre-line">
                {commands[currentLine].output.slice(0, currentChar - commands[currentLine].command.length - 3)}
                {showCursor && currentLine < commands.length && <span className="bg-emerald-400 text-black">█</span>}
              </div>
            )}
            {currentChar <= commands[currentLine].command.length + 2 && showCursor && (
              <span className="bg-emerald-400 text-black">█</span>
            )}
          </div>
        )}

        {currentLine >= commands.length && (
          <div className="text-emerald-400">$ {showCursor && <span className="bg-emerald-400 text-black">█</span>}</div>
        )}
      </div>
    </div>
  )
}

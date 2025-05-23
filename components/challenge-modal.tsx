"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function ChallengeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)

  const challenge = {
    title: "FizzBuzz Challenge",
    description:
      "Write a function that prints numbers from 1 to n. For multiples of 3, print 'Fizz' instead of the number. For multiples of 5, print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'.",
    initialCode: `function fizzBuzz(n) {
  // Your code here
  
}

// Example: fizzBuzz(15) should return:
// [
//   1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
//   11, "Fizz", 13, 14, "FizzBuzz"
// ]`,
    testCases: [
      { input: 15, expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] },
    ],
  }

  const checkSolution = () => {
    try {
      // Create a function from the code string
      const userFunction = new Function(`
        ${code}
        return fizzBuzz;
      `)()

      // Run test cases
      const testCase = challenge.testCases[0]
      const userResult = userFunction(testCase.input)

      // Compare results
      const expected = JSON.stringify(testCase.expected)
      const actual = JSON.stringify(userResult)

      if (expected === actual) {
        setResult("Congratulations! Your solution is correct.")
        setIsCorrect(true)
      } else {
        setResult(`Your solution doesn't match the expected output.\nExpected: ${expected}\nActual: ${actual}`)
        setIsCorrect(false)
      }
    } catch (error) {
      setResult(`Error: ${(error as Error).message}`)
      setIsCorrect(false)
    }
  }

  // For demo purposes, we'll just toggle the modal with a button
  // In a real implementation, this would be triggered by finding an easter egg
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg border border-zinc-700 w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-emerald-400">Secret Challenge Found!</h2>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-200">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
          <p className="text-zinc-300 mb-4">{challenge.description}</p>

          <div className="mb-4">
            <textarea
              value={code || challenge.initialCode}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 bg-zinc-950 text-emerald-300 p-4 rounded-md font-mono text-sm"
            />
          </div>

          {result && (
            <div
              className={`p-4 rounded-md mb-4 ${isCorrect ? "bg-emerald-900/30 text-emerald-300" : "bg-red-900/30 text-red-300"}`}
            >
              <pre className="whitespace-pre-wrap font-mono text-sm">{result}</pre>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-700 flex justify-between">
          <button
            onClick={() => setCode(challenge.initialCode)}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md transition-colors"
          >
            Reset Code
          </button>

          <button
            onClick={checkSolution}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
          >
            Run & Check
          </button>
        </div>
      </div>
    </div>
  )
}

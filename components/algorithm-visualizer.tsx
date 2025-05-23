"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

type SortingAlgorithm = "bubble" | "selection" | "insertion"

export function AlgorithmVisualizer() {
  const [array, setArray] = useState<number[]>([])
  const [sorting, setSorting] = useState(false)
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>("bubble")
  const [speed, setSpeed] = useState(100)
  const [currentStep, setCurrentStep] = useState<number[]>([])
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Generate random array
  const generateArray = () => {
    const newArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100) + 5)
    setArray(newArray)
    setCurrentStep([])
  }

  useEffect(() => {
    generateArray()
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current)
    }
  }, [])

  const startSorting = () => {
    if (sorting) return
    setSorting(true)

    let steps: number[][] = []
    const arrCopy = [...array]

    // Generate sorting steps based on algorithm
    if (algorithm === "bubble") {
      steps = bubbleSort(arrCopy)
    } else if (algorithm === "selection") {
      steps = selectionSort(arrCopy)
    } else if (algorithm === "insertion") {
      steps = insertionSort(arrCopy)
    }

    let stepIndex = 0

    const animate = () => {
      if (stepIndex < steps.length) {
        setArray(steps[stepIndex])
        setCurrentStep([stepIndex, stepIndex + 1])
        stepIndex++
        animationRef.current = setTimeout(animate, speed)
      } else {
        setSorting(false)
        setCurrentStep([])
      }
    }

    animate()
  }

  const stopSorting = () => {
    if (animationRef.current) clearTimeout(animationRef.current)
    setSorting(false)
  }

  const resetArray = () => {
    stopSorting()
    generateArray()
  }

  // Sorting algorithms that return steps
  const bubbleSort = (arr: number[]): number[][] => {
    const steps: number[][] = []
    const n = arr.length
    const arrCopy = [...arr]

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arrCopy[j] > arrCopy[j + 1]) {
          // Swap
          ;[arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]]
          steps.push([...arrCopy])
        }
      }
    }

    return steps
  }

  const selectionSort = (arr: number[]): number[][] => {
    const steps: number[][] = []
    const n = arr.length
    const arrCopy = [...arr]

    for (let i = 0; i < n; i++) {
      let minIdx = i

      for (let j = i + 1; j < n; j++) {
        if (arrCopy[j] < arrCopy[minIdx]) {
          minIdx = j
        }
      }

      if (minIdx !== i) {
        ;[arrCopy[i], arrCopy[minIdx]] = [arrCopy[minIdx], arrCopy[i]]
        steps.push([...arrCopy])
      }
    }

    return steps
  }

  const insertionSort = (arr: number[]): number[][] => {
    const steps: number[][] = []
    const n = arr.length
    const arrCopy = [...arr]

    for (let i = 1; i < n; i++) {
      const key = arrCopy[i]
      let j = i - 1

      while (j >= 0 && arrCopy[j] > key) {
        arrCopy[j + 1] = arrCopy[j]
        j--
        steps.push([...arrCopy])
      }

      arrCopy[j + 1] = key
      steps.push([...arrCopy])
    }

    return steps
  }

  const getBarColor = (index: number) => {
    if (currentStep.includes(index)) {
      return "bg-yellow-500"
    }
    return "bg-emerald-500"
  }

  return (
    <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
      <h3 className="text-xl font-semibold mb-4">Algorithm Visualizer</h3>

      <div className="flex items-end justify-center h-40 mb-6 gap-1">
        {array.map((value, index) => (
          <div
            key={index}
            className={`${getBarColor(index)} rounded-t transition-all duration-200`}
            style={{
              height: `${value}%`,
              width: `${100 / array.length - 1}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Algorithm</label>
          <select
            className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-2 text-zinc-200"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as SortingAlgorithm)}
            disabled={sorting}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-1">Speed</label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={500 - speed}
            onChange={(e) => setSpeed(500 - Number.parseInt(e.target.value))}
            className="w-full"
            disabled={sorting}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={resetArray}
          className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md transition-colors flex items-center"
          disabled={sorting}
        >
          <RotateCcw size={16} className="mr-2" /> Reset
        </button>

        <button
          onClick={sorting ? stopSorting : startSorting}
          className={`px-4 py-2 ${
            sorting ? "bg-red-600 hover:bg-red-700" : "bg-emerald-600 hover:bg-emerald-700"
          } rounded-md transition-colors flex items-center`}
        >
          {sorting ? (
            <>
              <Pause size={16} className="mr-2" /> Stop
            </>
          ) : (
            <>
              <Play size={16} className="mr-2" /> Start
            </>
          )}
        </button>
      </div>
    </div>
  )
}

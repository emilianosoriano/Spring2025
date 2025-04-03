"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface OpenEndedProblemProps {
  problem: {
    description: string
    testCases: { input: any; expected: any }[]
  }
}

export default function OpenEndedProblem({ problem }: OpenEndedProblemProps) {
  const [code, setCode] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async () => {
    // In a real application, you would send the code to your backend for evaluation
    // and use the AI model to grade it. For now, we'll use a placeholder response.
    setFeedback(
      "Your solution looks good! Here are some suggestions for improvement: Consider using list comprehension for creating the list of even numbers. You could also use the built-in sum() function to calculate the sum of the list.",
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Open-Ended Problem</h2>
      <p className="text-xl mb-4 text-white">{problem.description}</p>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Test Cases:</h3>
        <ul className="list-disc list-inside text-white">
          {problem.testCases.map((testCase, index) => (
            <li key={index}>
              Input: {JSON.stringify(testCase.input)}, Expected Output: {JSON.stringify(testCase.expected)}
            </li>
          ))}
        </ul>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 p-4 bg-gray-800 text-white font-mono rounded-lg"
        placeholder="Write your Python code here..."
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full text-lg shadow-lg hover:bg-green-600 transition duration-300"
      >
        Submit Solution
      </motion.button>
      {feedback && (
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Feedback:</h3>
          <p className="text-white">{feedback}</p>
        </div>
      )}
    </div>
  )
}


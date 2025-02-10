"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface QuizProps {
  questions: {
    question: string
    options: string[]
    correctAnswer: number
  }[]
  onComplete: () => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      onComplete()
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Quiz</h2>
      <p className="text-xl mb-4 text-white">{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedAnswer(index)}
          className={`w-full text-left p-4 rounded-lg ${
            selectedAnswer === index ? "bg-yellow-400 text-blue-700" : "bg-white bg-opacity-20 text-white"
          }`}
        >
          {option}
        </motion.button>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAnswer}
        disabled={selectedAnswer === null}
        className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
      </motion.button>
    </div>
  )
}


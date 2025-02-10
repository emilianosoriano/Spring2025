"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Brain, Zap } from "lucide-react"

interface HomeProps {
  onStartLearning: () => void
  onEnroll: () => void
}

export default function Home({ onStartLearning, onEnroll }: HomeProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Mentor IA
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Unlock the power of programming with interactive lessons and AI support
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartLearning}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-400 hover:text-blue-700 transition duration-300"
          >
            Start Learning Now
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Code,
              title: "Learn to Code",
              description: "Master programming fundamentals with hands-on exercises",
            },
            {
              icon: Brain,
              title: "AI-Powered Learning",
              description: "Get personalized assistance from our advanced AI tutor",
            },
            {
              icon: Zap,
              title: "Rapid Progress",
              description: "Accelerate your learning with our structured curriculum",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to begin your coding journey?</h2>
          <p className="text-xl mb-8">Join thousands of students who have transformed their careers with Mentor IA</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnroll}
            className="bg-yellow-400 text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}


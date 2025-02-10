"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Bot } from "lucide-react"

export default function AIInteraction() {
  const [userInput, setUserInput] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/api/submit-code/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: userInput }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()

      console.log(data); // Log the response to see if you’re getting feedback

      // Check if feedback exists in the response and set it
      if (data.feedback) {
        setAiResponse(data.feedback)
      } else {
        setAiResponse('No feedback received')
      }
    } catch (error) {
      setAiResponse(`Error: ${error.message}`)
    }
  }

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              AI Learning Assistant
            </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">Get personalized help from our advanced AI tutor</p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-4">
                <Bot className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold">Ask your question</h2>
              </div>
              <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full p-2 border rounded bg-white bg-opacity-50 text-blue-900 placeholder-blue-700"
                  rows={4}
                  placeholder="Type your programming question or code here..."
              ></textarea>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-full text-lg shadow-lg hover:bg-white hover:text-blue-600 transition duration-300 flex items-center"
                  disabled={loading}
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Processing..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>

          {aiResponse && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Bot className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold">AI Response:</h3>
                </div>
                <p className="text-gray-200">{aiResponse}</p>
              </motion.div>
          )}
        </div>
      </div>
  )
}

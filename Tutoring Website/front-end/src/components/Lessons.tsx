import { motion } from "framer-motion"
import { Book, Code, Database, Server } from "lucide-react"

export default function Lessons({ onLessonSelect }) {
  const lessons = [
    { id: 1, title: "Variables and Data Types", icon: Code, slug: "variables-and-data-types" },
    { id: 2, title: "Control Structures", icon: Server, slug: "control-structures" },
    { id: 3, title: "Functions and Methods", icon: Book, slug: "functions-and-methods" },
    { id: 4, title: "Object-Oriented Programming", icon: Database, slug: "object-oriented-programming" },
  ]

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
              Programming Fundamentals
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">Master the core concepts of coding with our interactive lessons</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
            >
              <lesson.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
              <p className="text-gray-200 mb-4">
                Learn the fundamentals of {lesson.title.toLowerCase()} in programming.
              </p>
              <button
                  onClick={() => onLessonSelect(lesson.slug)}  // Trigger lesson selection
                  className="bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-full text-sm shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Start Lesson
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


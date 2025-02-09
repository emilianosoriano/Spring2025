import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface NavigationProps {
  setCurrentPage: (page: string) => void
  setCurrentLesson: (lesson: string | null) => void
}

export default function Navigation({ setCurrentPage, setCurrentLesson }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
    setCurrentLesson(null)
  }

  return (
      <nav
          className={`fixed w-full z-10 transition-all duration-300 ${
              isScrolled ? "bg-blue-600 shadow-md" : "bg-blue-600 bg-opacity-50 backdrop-filter backdrop-blur-lg"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Mentor IA</div>
          <div className="space-x-4 flex items-center">
            <button
                onClick={() => handleNavigation("home")}
                className="text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </button>
            <button
                onClick={() => handleNavigation("lessons")}
                className="text-white hover:text-yellow-400 transition duration-300"
            >
              Lessons
            </button>
            <button
                onClick={() => handleNavigation("ai")}
                className="text-white hover:text-yellow-400 transition duration-300"
            >
              AI Tutor
            </button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation("login")}
                className="bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-full text-sm shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Login
            </motion.button>
          </div>
        </div>
      </nav>
  )
}

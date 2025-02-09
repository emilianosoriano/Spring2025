"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Quiz from "./Quiz"
import OpenEndedProblem from "./OpenEndedProblem"
import { Code } from "lucide-react"

interface LessonContentProps {
  lessonSlug: string
}

export default function LessonContent({ lessonSlug }: LessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const lessonData = {
    "variables-and-data-types": {
      title: "Variables and Data Types",
      content: [
        {
          type: "text",
          content:
            'Welcome to the "Variables and Data Types" lesson! In this lesson, we\'ll explore the fundamental building blocks of Python programming.',
        },
        {
          type: "text",
          content:
            "Variables are containers for storing data values. In Python, you don't need to declare variables before using them or declare their type. Python automatically determines the variable type based on the value assigned to it.",
        },
        {
          type: "code",
          content: `# Assigning values to variables
x = 5           # Integer
y = "Hello"     # String
z = 3.14        # Float

print(x)
print(y)
print(z)`,
        },
        {
          type: "text",
          content: "Python has several built-in data types. Let's explore some of the most common ones:",
        },
        {
          type: "text",
          content: "1. Numeric Types:",
        },
        {
          type: "code",
          content: `# Integer
age = 25

# Float
height = 1.75

# Complex
c = 3 + 4j

print(f"Age: {age}, Type: {type(age)}")
print(f"Height: {height}, Type: {type(height)}")
print(f"Complex: {c}, Type: {type(c)}")`,
        },
        {
          type: "text",
          content: "2. Sequence Types:",
        },
        {
          type: "code",
          content: `# String
name = "Alice"

# List (mutable)
fruits = ["apple", "banana", "cherry"]

# Tuple (immutable)
coordinates = (10, 20)

print(f"Name: {name}, Type: {type(name)}")
print(f"Fruits: {fruits}, Type: {type(fruits)}")
print(f"Coordinates: {coordinates}, Type: {type(coordinates)}")`,
        },
        {
          type: "text",
          content: "3. Mapping Type:",
        },
        {
          type: "code",
          content: `# Dictionary
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}

print(f"Person: {person}, Type: {type(person)}")`,
        },
        {
          type: "text",
          content: "4. Set Types:",
        },
        {
          type: "code",
          content: `# Set (unordered collection of unique elements)
unique_numbers = {1, 2, 3, 4, 5}

print(f"Unique numbers: {unique_numbers}, Type: {type(unique_numbers)}")`,
        },
        {
          type: "text",
          content: "5. Boolean Type:",
        },
        {
          type: "code",
          content: `# Boolean
is_python_fun = True
is_java_fun = False

print(f"Is Python fun? {is_python_fun}, Type: {type(is_python_fun)}")
print(f"Is Java fun? {is_java_fun}, Type: {type(is_java_fun)}")`,
        },
        {
          type: "text",
          content:
            "Understanding variables and data types is crucial for writing effective Python code. They allow you to store and manipulate different kinds of data in your programs.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "What is the output of print(type(5))?",
            options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
            correctAnswer: 0,
          },
          {
            question: "Which of the following is a mutable data type in Python?",
            options: ["int", "float", "tuple", "list"],
            correctAnswer: 3,
          },
          {
            question: "What is the result of 3 + 4j?",
            options: ['A string "3 + 4j"', "A syntax error", "A complex number", "None of the above"],
            correctAnswer: 2,
          },
          {
            question: "Which data type is used to store a collection of unique elements in Python?",
            options: ["List", "Tuple", "Set", "Dictionary"],
            correctAnswer: 2,
          },
        ],
      },
      openEndedProblem: {
        description:
          "Create a function called `analyze_data` that takes a list of numbers as input and returns a dictionary containing the following information: the sum of all numbers, the average (mean) of the numbers, and a list of all even numbers in the input list.",
        testCases: [
          {
            input: [1, 2, 3, 4, 5, 6],
            expected: {
              sum: 21,
              average: 3.5,
              even_numbers: [2, 4, 6],
            },
          },
          {
            input: [10, 15, 20, 25, 30],
            expected: {
              sum: 100,
              average: 20.0,
              even_numbers: [10, 20, 30],
            },
          },
        ],
      },
    },
  }

  const lesson = lessonData[lessonSlug as keyof typeof lessonData]

  const renderContent = () => {
    if (currentStep < lesson.content.length) {
      const content = lesson.content[currentStep]
      return (
        <div className="mb-8">
          {content.type === "text" ? (
            <p className="text-lg mb-4 text-white">{content.content}</p>
          ) : (
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-2">
                <Code className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Python Code</span>
              </div>
              <pre className="text-white font-mono text-sm overflow-x-auto">
                <code>{content.content}</code>
              </pre>
            </div>
          )}
        </div>
      )
    } else if (currentStep === lesson.content.length) {
      return <Quiz questions={lesson.quiz.questions} onComplete={() => setCurrentStep(currentStep + 1)} />
    } else {
      return <OpenEndedProblem problem={lesson.openEndedProblem} />
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
              {lesson.title}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
        >
          {renderContent()}
          {currentStep < lesson.content.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-full text-lg shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Next
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  )
}


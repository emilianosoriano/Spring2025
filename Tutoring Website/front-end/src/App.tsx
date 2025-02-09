"use client"

import { useState } from "react"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Lessons from "./components/Lessons"
import AIInteraction from "./components/AIInteraction"
import LessonContent from "./components/LessonContent"
import Registration from "./components/Registration"

export default function App() {
    const [currentPage, setCurrentPage] = useState("home")
    const [currentLesson, setCurrentLesson] = useState<string | null>(null)

    const handleStartLearning = () => {
        setCurrentPage("lessons")
        setCurrentLesson(null)
    }

    const handleEnroll = () => {
        setCurrentPage("register")
        setCurrentLesson(null)
    }

    const renderPage = () => {
        if (currentLesson) {
            return <LessonContent lessonSlug={currentLesson} />
        }

        switch (currentPage) {
            case "home":
                return <Home onStartLearning={handleStartLearning} onEnroll={handleEnroll} />
            case "lessons":
                return <Lessons onLessonSelect={setCurrentLesson} />
            case "ai":
                return <AIInteraction />
            case "register":
                return <Registration />
            default:
                return <Home onStartLearning={handleStartLearning} onEnroll={handleEnroll} />
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <Navigation setCurrentPage={setCurrentPage} setCurrentLesson={setCurrentLesson} />
            <main className="pt-16">{renderPage()}</main>
        </div>
    )
}


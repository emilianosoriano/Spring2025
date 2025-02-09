import { ReactNode } from "react"
import Navigation from "./components/Navigation"

interface LayoutProps {
  children: ReactNode
  setCurrentPage: (page: string) => void
  setCurrentLesson: (lesson: string | null) => void
}

export default function Layout({ children, setCurrentPage, setCurrentLesson }: LayoutProps) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <Navigation setCurrentPage={setCurrentPage} setCurrentLesson={setCurrentLesson} />
        <main className="pt-16">{children}</main>
      </div>
  )
}

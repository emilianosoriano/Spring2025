"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function LessonPage() {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <div className="container mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl">{description}</p>
                </motion.div>
            </div>
        </div>
    );
}

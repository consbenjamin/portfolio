"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const fullText =
    `  const developer = {
      name: "Constantino Abba",
      role: "Full-Stack",
      passion: ["JavaScript", "UX/UI", "Automation"],
    };`
    ;

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(true)
        setText("")
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [text, isTyping])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="z-10 text-center max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Full-Stack Developer</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Turning complex problems into elegant solutions
          </p>
        </div>

        {/* Terminal-like interface */}
        <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg max-w-full sm:max-w-3xl mx-auto text-left">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-gray-800 dark:text-gray-200 text-sm sm:text-base break-words whitespace-pre-wrap">
            <span className="text-green-600 dark:text-green-400">$ </span>
            {text}
            <span
              className={`inline-block w-2 h-5 ml-1 bg-gray-800 dark:bg-gray-200 ${isTyping ? "animate-pulse" : ""}`}
            ></span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

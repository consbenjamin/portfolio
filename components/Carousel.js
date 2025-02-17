"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const skills = [
  { name: "HTML", color: "text-[#E44D26]", icon: "/html.svg?height=64&width=64" },
  { name: "CSS", color: "text-[#264DE4]", icon: "/css.svg?height=64&width=64" },
  { name: "JavaScript", color: "text-[#F7DF1E]", icon: "/js.svg?height=64&width=64" },
  { name: "Node", color: "text-[#6AA84F]", icon: "/node.svg?height=64&width=64" },
  { name: "React", color: "text-[#61DAFB]", icon: "/react.svg?height=64&width=64" },
  { name: "Next.js", color: "text-white", icon: "/nextjs.svg?height=64&width=64" },
  { name: "Tailwind", color: "text-[#38BDF8]", icon: "/tailwind.svg?height=64&width=64" },
  { name: "MongoDB", color: "text-[#47A248]", icon: "/mongodb.svg?height=64&width=64" },
  { name: "PostgreSQL", color: "text-[#3D85C6]", icon: "/pgsql.svg?height=64&width=64" },
  { name: "Zustand", color: "text-[#660000]", icon: "/zustand.svg?height=64&width=64" },
]

export default function Carousel() {
  const containerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const totalWidth = container.scrollWidth
    const viewWidth = container.offsetWidth
    const scrollSpeed = 1.0

    let animationFrameId

    const animate = () => {
      if (!isPaused) {
        setScrollPosition((prevPosition) => {
          let newPosition = prevPosition + scrollSpeed
          if (newPosition > totalWidth - viewWidth) {
            newPosition -= totalWidth / 2 // Vuelve a la mitad para un loop suave
          }
          return newPosition
        })
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  return (
    <div className="w-full bg-gray-100 dark:bg-[#0A0B14] py-12">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-8">
        SKILLS
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-hidden max-w-6xl mx-auto gap-4 px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-none w-[200px] bg-white dark:bg-[#0F1119] p-6 rounded-lg flex flex-col items-center justify-center gap-4 h-[200px] shadow-md dark:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={`${skill.name} icon`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className={`text-lg font-medium ${skill.color}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}


"use client"

import Image from "next/image"

const skills = [
  { name: "HTML", color: "text-[#E44D26]", icon: "/html.svg" },
  { name: "CSS", color: "text-[#264DE4]", icon: "/css.svg" },
  { name: "JavaScript", color: "text-[#F7DF1E]", icon: "/js.svg" },
  { name: "Node", color: "text-[#6AA84F]", icon: "/node.svg" },
  { name: "React", color: "text-[#61DAFB]", icon: "/react.svg" },
  { name: "Next.js", color: "dark:text-white text-gray-800", icon: "/nextjs.svg" },
  { name: "Tailwind", color: "text-[#38BDF8]", icon: "/tailwind.svg" },
  { name: "MongoDB", color: "text-[#47A248]", icon: "/mongodb.svg" },
  { name: "PostgreSQL", color: "text-[#3D85C6]", icon: "/pgsql.svg" },
  { name: "Zustand", color: "text-[#660000]", icon: "/zustand.svg" },
]

export default function Carousel({ t }) {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-200/50 dark:border-slate-800/50">
      <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white mb-10">
        {t.title}
      </h2>
      <div className="group overflow-hidden max-w-6xl mx-auto px-4">
        <div className="flex gap-4 w-max marquee group-hover:[animation-play-state:paused] [animation-play-state:running]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-none w-[200px] bg-white dark:bg-slate-800/80 p-6 rounded-xl flex flex-col items-center justify-center gap-4 h-[200px] shadow-md dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50"
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
    </div>
  )
}


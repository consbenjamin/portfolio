"use client"

import Image from "next/image"

const skills = [
  { name: "HTML", color: "text-[#E44D26]", icon: "/html.svg" },
  { name: "CSS", color: "text-[#264DE4]", icon: "/css.svg" },
  { name: "JavaScript", color: "text-[#B59A00] dark:text-[#F7DF1E]", icon: "/js.svg" },
  { name: "Node", color: "text-[#4C7A36] dark:text-[#6AA84F]", icon: "/node.svg" },
  { name: "React", color: "text-[#0B7285] dark:text-[#61DAFB]", icon: "/react.svg" },
  { name: "Next.js", color: "text-slate-800 dark:text-white", icon: "/nextjs.svg" },
  { name: "Tailwind", color: "text-[#0C7EA8] dark:text-[#38BDF8]", icon: "/tailwind.svg" },
  { name: "MongoDB", color: "text-[#2F7A33] dark:text-[#47A248]", icon: "/mongodb.svg" },
  { name: "PostgreSQL", color: "text-[#2E6395] dark:text-[#7FB2E5]", icon: "/pgsql.svg" },
  { name: "Zustand", color: "text-[#7A2E2E] dark:text-[#E7A6A6]", icon: "/zustand.svg" },
]

export default function Carousel({ t }) {
  return (
    <section
      aria-label={t.title}
      className="w-full bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20 border-y border-slate-200/70 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-10">
          {t.title}
        </h2>
      </div>
      <div className="marquee-viewport group overflow-hidden">
        <ul className="flex gap-4 w-max marquee group-hover:[animation-play-state:paused] [animation-play-state:running]">
          {[...skills, ...skills].map((skill, index) => (
            <li
              key={`${skill.name}-${index}`}
              aria-hidden={index >= skills.length}
              className="flex-none w-[160px] h-[160px] bg-white dark:bg-slate-800/80 p-5 rounded-xl flex flex-col items-center justify-center gap-3 shadow-sm border border-slate-200 dark:border-slate-700/60"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className={`text-sm font-semibold ${skill.color}`}>
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

"use client"

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCss",
    "Zustand",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Git",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              My name is Constantino Abba, i'm a Full Stack Developer from Argentina. I have experience working with NodeJS, React, Zustand, NextJs, and other technologies in the sector. 
              I have a great ability to adapt and I'm always looking for new challenges and learning new technologies to continue growing. 
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With a creative mindset, communication skills, and autonomy. My goal is to continue learning and growing in this ever-evolving field,
              contributing to innovative projects that make a difference.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


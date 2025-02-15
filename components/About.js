"use client"

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Git",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with a keen eye for creating elegant, efficient, and user-friendly
              solutions. With a strong foundation in both front-end and back-end technologies, I bring ideas to life by
              crafting robust and scalable applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is to continue learning and growing in this ever-evolving field, tackling new challenges and
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


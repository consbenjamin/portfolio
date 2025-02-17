import Image from "next/image"
import { ExternalLink } from 'lucide-react';
import vapeclub from "../images/vapeclub.png"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    url: "#"
  },
  {
    title: "Vape Club E-Commerce",
    description: "E-commerce focused on facilitating the sale and purchase of vapes, with user authentication and integration with MercadoPago payment gateway.",
    image: vapeclub,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NextAuth", "MercadoPago"],
    url: "https://vapeclub.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
    url: "#"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-auto"
                  >
                    <ExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

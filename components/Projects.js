import Image from "next/image";
import { ExternalLink } from 'lucide-react';
import vapeclub from "../images/vapeclub.png";
import chatapp from "../images/chat-app.png";
import dolaractual from "../images/dolar-actual.png";

const projects = [
  // {
  //   title: "E-commerce hASSU",
  //   descriptions: {
  //     en: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
  //     es: "Una solución de comercio electrónico full-stack con autenticación de usuarios, gestión de productos e integración con pasarela de pago.",
  //   },
  //   image: "/placeholder.svg?height=300&width=400",
  //   technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  //   url: "#",
  //   status: "development",
  // },
  {
    title: "Vape Club E-Commerce",
    descriptions: {
      en: "E-commerce focused on facilitating the sale and purchase of vapes, with user authentication and integration with MercadoPago payment gateway.",
      es: "E-commerce enfocado en facilitar la venta y compra de vapes, con autenticación de usuarios e integración con la pasarela de pago MercadoPago.",
    },
    image: vapeclub,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NextAuth", "MercadoPago"],
    url: "https://vapeclub.vercel.app/",
    status: "online", 
  },
  {
    title: "Chat-App",
    descriptions: {
      en: "A real-time chat system with secure authentication, developed with modern web technologies.",
      es: "Un sistema de chat en tiempo real con autenticación segura, desarrollado con tecnologías web modernas.",
    },
    image: chatapp,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NextAuth", "Zustand", "Socket.io"],
    url: "https://chat-online-app.vercel.app/",
    status: "online",  
  },
  {
    title: "Dolar-Actual",
    descriptions: {
      en: "Website to see the current dollar rate in Argentina and its historical rate using an external API.",
      es: "Sitio web para ver el tipo de cambio actual del dólar en Argentina y su tasa histórica usando una API externa.",
    },
    image: dolaractual,
    technologies: ["Next.js", "Tailwind CSS", "Charts", "External API"],
    url: "https://dolar-actual.vercel.app/",
    status: "online",  
  },
];

export default function Projects({ t, locale }) {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">{t.title}</h2>
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
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.descriptions[locale]}</p>
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

                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-3 h-3 rounded-full ${project.status === 'online' ? 'bg-green-500' : project.status === 'development' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {project.status === 'online' ? 'Deployed' : project.status === 'development' ? 'In Development' : 'Offline'}
                  </span>
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
  );
}

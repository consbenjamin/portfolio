'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';
import vapeclub from "../images/vapeclub.png";
import chatapp from "../images/chat-app.png";
import dolaractual from "../images/dolar-actual.png";
import hassuru from "../images/hassuru.png";
import linkbrief from "../images/LinkBrief.png";
import subghost from "../images/subghost.png";

const projects = [
  {
    title: "Hassuru.ar",
    descriptions: {
      en: "Full-stack E-commerce of clothing developed collaboratively for a client with admin dashboard.",
      es: "Full-stack E-commerce de Ropa desarrollado de manera conjunta para un cliente con dashboard de administración.",
    },
    image: hassuru,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Zustand", "Cloudinary", "Express", "MongoDB"],
    url: "https://www.hassuru.ar/",
    status: "online",
  },
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
    technologies: ["Next.js", "Tailwind CSS", "ReCharts", "External API"],
    url: "https://dolar-actual-argentina.vercel.app/",
    status: "online",  
  },
  {
    title: "LinkBrief URL-Shortener",
    descriptions: {
      en: "A URL shortener that allows users to create shortened links with analytics to track clicks and traffic sources.",
      es: "Un acortador de URLs que permite a los usuarios crear enlaces cortos con analíticas para rastrear clics y fuentes de tráfico.",
    },
    image: linkbrief,
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    url: "https://linkbrief.vercel.app/",
    status: "paused",  
  },
  {
    title: "SubGhost - Detector de Suscripciones",
    descriptions: {
      en: "Smart dashboard to monitor recurring subscriptions, forecast upcoming charges, and receive reminders so nothing renews unnoticed.",
      es: "Panel inteligente para controlar suscripciones recurrentes, anticipar los próximos cobros y recibir avisos para que nada se renueve sin control.",
    },
    image: subghost,
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "PWA"],
    url: "https://subghost.vercel.app/",
    status: "online",  
  }
];

export default function Projects({ t, locale }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`reveal py-20 bg-slate-100 dark:bg-slate-900/50 ${visible ? "reveal-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">{t.title}</h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">
          {locale === "es" ? "Algunos de los proyectos en los que he trabajado" : "Some of the projects I've worked on"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 overflow-hidden flex flex-col h-full border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-indigo-600/90 dark:bg-indigo-700/90 flex items-center justify-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink size={20} />
                  {locale === "es" ? "Ver proyecto" : "View project"}
                </a>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-grow text-sm leading-relaxed">{project.descriptions[locale]}</p>
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${project.status === 'online' ? 'bg-emerald-500' : project.status === 'development' ? 'bg-amber-500' : project.status === 'paused' ? 'bg-amber-500' : 'bg-red-500'}`} aria-hidden />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {project.status === 'online' ? (locale === "es" ? "En línea" : "Live") : project.status === 'development' ? (locale === "es" ? "En desarrollo" : "In development") : project.status === 'paused' ? (locale === "es" ? "Pausado" : "Paused") : "Offline"}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

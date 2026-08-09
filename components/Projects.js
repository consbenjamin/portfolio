'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import vapeclub from "../images/vapeclub.png";
import chatapp from "../images/chat-app.png";
import dolaractual from "../images/dolar-actual.png";
import hassuru from "../images/hassuru.png";
import jobtracker from "../images/jobtracker.png";
import subghost from "../images/subghost.png";

const projects = [
  {
    slug: "hassuru",
    title: "Hassuru.ar",
    descriptions: {
      en: "Full-stack E-commerce of clothing developed collaboratively for a client with admin dashboard.",
      es: "Full-stack E-commerce de Ropa desarrollado de manera conjunta para un cliente con dashboard de administración.",
    },
    image: hassuru,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Zustand", "Cloudinary", "Express", "MongoDB"],
    url: "https://www.hassuru.ar/",
    status: "online",
    layout: "banner",
    // Mismos highlights que el caso de estudio en app/[locale]/projects/[slug]/page.js
    highlights: {
      en: [
        "Admin dashboard for product and order management",
        "Performance-focused UI with modern Next.js patterns",
        "Real client delivery with iterative improvements",
      ],
      es: [
        "Dashboard admin para gestión de productos y pedidos",
        "UI enfocada en performance con patrones modernos de Next.js",
        "Entrega a cliente real con mejoras iterativas",
      ],
    },
  },
  {
    slug: "vape-club",
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
    slug: "chat-app",
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
    slug: "job-tracker",
    title: "Job Tracker",
    descriptions: {
      en: "Job search tracker with Kanban, contacts, interactions, tasks and analytics in one place. Includes web scraping to capture job offers and a Chrome Web Extension. Light/dark theme, installable PWA.",
      es: "Seguimiento de búsqueda de empleo con Kanban, contactos, interacciones, tareas y analytics en un solo lugar. Incluye web scraping para capturar ofertas y una Chrome Web Extension. Tema claro/oscuro, PWA instalable.",
    },
    image: jobtracker,
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PWA", "Web Scraping", "Chrome Extension"],
    url: "https://job-tracker-tool.vercel.app/",
    status: "online",
  },
  {
    slug: "dolar-actual",
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
    slug: "subghost",
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

const STATUS_DOT = {
  online: "bg-emerald-500",
  development: "bg-amber-500",
  paused: "bg-amber-500",
};

function statusLabel(status, locale) {
  if (status === "online") return locale === "es" ? "En línea" : "Live";
  if (status === "development") return locale === "es" ? "En desarrollo" : "In development";
  if (status === "paused") return locale === "es" ? "Pausado" : "Paused";
  return "Offline";
}

const CARD_SHELL =
  "group relative flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-900 transition-all duration-300";

function TechChips({ technologies, limit }) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  const hidden = technologies.length - visible.length;
  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((tech) => (
        <span
          key={tech}
          className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md text-xs font-medium"
        >
          {tech}
        </span>
      ))}
      {hidden > 0 && (
        <span className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-500 dark:text-slate-400">
          +{hidden}
        </span>
      )}
    </div>
  );
}

function CardMeta({ project, locale }) {
  return (
    <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${STATUS_DOT[project.status] ?? "bg-red-500"}`} aria-hidden />
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {statusLabel(project.status, locale)}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
        >
          <ExternalLink size={15} aria-hidden />
          {locale === "es" ? "Ver sitio" : "Live site"}
          <span className="sr-only">{project.title}</span>
        </a>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          {locale === "es" ? "Caso" : "Case"}
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </div>
  );
}

function CaseLink({ project, locale, className }) {
  return (
    <a
      href={`/${locale}/projects/${project.slug}`}
      className={`focus:outline-none after:absolute after:inset-0 after:content-[''] ${className ?? ""}`}
    >
      {project.title}
    </a>
  );
}

function imageAlt(project, locale) {
  return locale === "es" ? `Captura de ${project.title}` : `${project.title} screenshot`;
}

/* La grilla es de 6 columnas en lg: una card normal ocupa 2 (un tercio).
   Si la ultima fila quedaria incompleta, las sobrantes se ensanchan para
   llenarla, asi el layout se adapta a cualquier cantidad de proyectos.
     resto 0 -> filas de 3 exactas
     resto 1 -> la ultima ocupa la fila entera (layout horizontal)
     resto 2 -> las dos ultimas ocupan media fila cada una          */
function cardLayout(index, count) {
  const rest = count % 3;
  const size =
    rest === 1 && index === count - 1
      ? "full"
      : rest === 2 && index >= count - 2
        ? "half"
        : "third";

  // En md la grilla es de 2 columnas (span 3 de 6). Si la cantidad de cards
  // que no ocupan la fila entera es impar, la ultima de ellas se ensancha.
  const nonFullCount = rest === 1 ? count - 1 : count;
  const mdFull = size === "full" || (nonFullCount % 2 === 1 && index === nonFullCount - 1);

  const lg =
    size === "full" ? "lg:col-span-6" : size === "half" ? "lg:col-span-3" : "lg:col-span-2";

  return { size, mdFull, className: `${mdFull ? "md:col-span-6" : "md:col-span-3"} ${lg}` };
}

const IMAGE_BY_SIZE = {
  third: {
    w: 500,
    h: 375,
    cls: "h-48",
    // en md ocupa el ancho completo, asi que la imagen crece; en lg vuelve
    mdFullCls: "md:h-60 lg:h-48",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  half: {
    w: 760,
    h: 285,
    cls: "h-48 lg:h-56",
    mdFullCls: "md:h-60",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
};

/* Card horizontal: imagen a la izquierda con su relacion natural, texto a la
   derecha. La usan el destacado y cualquier card que ocupe la fila entera. */
function HorizontalCard({ project, locale, featured = false }) {
  const highlights = featured ? project.highlights?.[locale] ?? [] : [];
  return (
    <article className={`${CARD_SHELL} flex-col lg:grid lg:grid-cols-12 lg:items-stretch h-full`}>
      <div className="relative lg:col-span-7 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image}
          alt={imageAlt(project, locale)}
          width={1200}
          height={578}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="w-full h-56 sm:h-72 lg:h-full lg:absolute lg:inset-0 object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      <div className="lg:col-span-5 flex flex-col gap-4 p-6 lg:p-8">
        <div>
          {featured && (
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              {locale === "es" ? "Proyecto destacado" : "Featured project"}
            </p>
          )}
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            <CaseLink project={project} locale={locale} />
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.descriptions[locale]}
        </p>

        {highlights.length > 0 && (
          <ul className="flex flex-col gap-2">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        )}

        <TechChips technologies={project.technologies} />
        <div className="mt-auto">
          <CardMeta project={project} locale={locale} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, locale, size, mdFull = false }) {
  const img = IMAGE_BY_SIZE[size];
  return (
    <article className={`${CARD_SHELL} flex-col h-full`}>
      <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image}
          alt={imageAlt(project, locale)}
          width={img.w}
          height={img.h}
          sizes={img.sizes}
          className={`w-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ${img.cls} ${
            mdFull ? img.mdFullCls : ""
          }`}
        />
      </div>
      <div className="flex flex-col flex-grow gap-3 p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          <CaseLink project={project} locale={locale} />
        </h3>
        {/* Clamp a 3 lineas: si no, una descripcion larga estira toda la fila
            y deja huecos en las cards vecinas. */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.descriptions[locale]}
        </p>
        <TechChips technologies={project.technologies} limit={size === "half" ? 5 : 4} />
        <div className="mt-auto">
          <CardMeta project={project} locale={locale} />
        </div>
      </div>
    </article>
  );
}

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

  const banner = projects.find((p) => p.layout === "banner");
  const rest = banner ? projects.filter((p) => p !== banner) : projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`reveal py-20 lg:py-24 bg-slate-100 dark:bg-slate-900/50 ${visible ? "reveal-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.intro ?? (locale === "es" ? "Algunos de los proyectos en los que he trabajado" : "Some of the projects I've worked on")}
          </p>
        </div>

        {banner && (
          <div className="mb-6">
            <HorizontalCard project={banner} locale={locale} featured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {rest.map((project, index) => {
            const { size, mdFull, className } = cardLayout(index, rest.length);
            return (
              <div key={project.slug} className={className}>
                {size === "full" ? (
                  <HorizontalCard project={project} locale={locale} />
                ) : (
                  <ProjectCard project={project} locale={locale} size={size} mdFull={mdFull} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { headers } from "next/headers";

const locales = ["en", "es"];

const PROJECTS = [
  {
    slug: "hassuru",
    name: "Hassuru.ar",
    liveUrl: "https://www.hassuru.ar/",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Zustand", "Express", "MongoDB"],
    summary: {
      en: "Full‑stack e‑commerce for a clothing brand with an admin dashboard.",
      es: "E‑commerce full‑stack para una marca de ropa con dashboard de administración.",
    },
    highlights: {
      en: [
        "Admin dashboard for product and order management",
        "Performance‑focused UI with modern Next.js patterns",
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
    name: "Vape Club E‑Commerce",
    liveUrl: "https://vapeclub.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NextAuth", "MercadoPago"],
    summary: {
      en: "E‑commerce with authentication and MercadoPago payments integration.",
      es: "E‑commerce con autenticación e integración de pagos con MercadoPago.",
    },
    highlights: {
      en: ["User auth flow", "Checkout with MercadoPago", "Responsive UI for conversion"],
      es: ["Flujo de autenticación", "Checkout con MercadoPago", "UI responsive orientada a conversión"],
    },
  },
  {
    slug: "chat-app",
    name: "Chat‑App",
    liveUrl: "https://chat-online-app.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "NextAuth"],
    summary: {
      en: "Real‑time chat with secure authentication.",
      es: "Chat en tiempo real con autenticación segura.",
    },
    highlights: {
      en: ["Realtime messaging", "Auth & session handling", "Modern responsive layout"],
      es: ["Mensajería en tiempo real", "Auth y manejo de sesión", "Layout moderno y responsive"],
    },
  },
  {
    slug: "job-tracker",
    name: "Job Tracker",
    liveUrl: "https://job-tracker-tool.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PWA", "Web Scraping", "Chrome Extension"],
    summary: {
      en: "Job search tracker with Kanban and analytics, plus scraping and a Chrome extension.",
      es: "Tracker de búsqueda laboral con Kanban y analytics, más scraping y extensión de Chrome.",
    },
    highlights: {
      en: ["Kanban workflow", "Installable PWA", "Automation via scraping + extension"],
      es: ["Flujo Kanban", "PWA instalable", "Automatización con scraping + extensión"],
    },
  },
  {
    slug: "dolar-actual",
    name: "Dolar‑Actual",
    liveUrl: "https://dolar-actual-argentina.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "External API"],
    summary: {
      en: "Dollar exchange rate dashboard for Argentina using an external API.",
      es: "Dashboard del dólar en Argentina usando una API externa.",
    },
    highlights: {
      en: ["Clean data UI", "External API integration", "Fast, simple UX"],
      es: ["UI clara de datos", "Integración con API externa", "UX simple y rápida"],
    },
  },
  {
    slug: "subghost",
    name: "SubGhost",
    liveUrl: "https://subghost.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "PWA"],
    summary: {
      en: "Subscription monitoring dashboard with reminders and forecasting.",
      es: "Dashboard para controlar suscripciones con recordatorios y proyección.",
    },
    highlights: {
      en: ["Recurring billing insights", "Supabase backend", "Installable PWA experience"],
      es: ["Insights de cobros recurrentes", "Backend en Supabase", "Experiencia PWA instalable"],
    },
  },
];

function getBaseUrlFromHeaders(h) {
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return new URL("https://example.com");
  return new URL(`${proto}://${host}`);
}

export function generateStaticParams() {
  return PROJECTS.flatMap((p) => locales.map((locale) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  if (!locales.includes(locale)) return {};
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  const baseUrl = getBaseUrlFromHeaders(headers());
  const url = new URL(`/${locale}/projects/${slug}`, baseUrl);
  const title =
    locale === "es"
      ? `${project.name} | Caso de estudio — Constantino Abba`
      : `${project.name} | Case study — Constantino Abba`;
  const description = project.summary[locale];

  return {
    title,
    description,
    alternates: {
      canonical: url.pathname,
      languages: {
        en: `/en/projects/${slug}`,
        es: `/es/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: url.pathname,
      title,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { locale, slug } = params;
  if (!locales.includes(locale)) notFound();

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const backHref = `/${locale}#projects`;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <a
          href={backHref}
          className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          {locale === "es" ? "← Volver a proyectos" : "← Back to projects"}
        </a>

        <header className="mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {project.name}
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            {project.summary[locale]}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-3 text-sm font-semibold rounded-xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors"
            >
              {locale === "es" ? "Ver proyecto en vivo" : "View live project"}
            </a>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            {locale === "es" ? "Highlights" : "Highlights"}
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
            {project.highlights[locale].map((item) => (
              <li key={item} className="leading-relaxed">
                - {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-slate-200/70 dark:border-slate-700/60 pt-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            {locale === "es" ? "¿Querés algo similar?" : "Need something similar?"}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            {locale === "es"
              ? "Estoy disponible para proyectos full‑stack en Argentina/LatAm (remoto)."
              : "Available for full‑stack projects in Argentina/LatAm (remote)."}
          </p>
          <a
            href={`/${locale}#contact`}
            className="mt-5 inline-flex text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            {locale === "es" ? "Ir a contacto →" : "Go to contact →"}
          </a>
        </section>
      </div>
    </main>
  );
}


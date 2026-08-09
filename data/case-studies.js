/* Fuente unica de los casos de estudio. La consumen la pagina de detalle
   y el sitemap, para que no se desincronicen. */

export const LOCALES = ["en", "es"];

export const CASE_STUDIES = [
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

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((project) => project.slug);

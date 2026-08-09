import { notFound } from "next/navigation";
import { headers } from "next/headers";

import { CASE_STUDIES, LOCALES } from "@/data/case-studies";

function getBaseUrlFromHeaders(h) {
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return new URL("https://example.com");
  return new URL(`${proto}://${host}`);
}

export function generateStaticParams() {
  return CASE_STUDIES.flatMap((p) => LOCALES.map((locale) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!LOCALES.includes(locale)) return {};
  const project = CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) return {};

  const baseUrl = getBaseUrlFromHeaders(await headers());
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
  const { locale, slug } = await params;
  if (!LOCALES.includes(locale)) notFound();

  const project = CASE_STUDIES.find((p) => p.slug === slug);
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


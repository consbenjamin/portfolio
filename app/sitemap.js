import { headers } from "next/headers";

import { CASE_STUDY_SLUGS, LOCALES } from "@/data/case-studies";

async function getBaseUrlFromHeaders() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return "https://example.com";
  return `${proto}://${host}`;
}

function languageAlternates(baseUrl, path) {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
  );
}

export default async function sitemap() {
  const baseUrl = await getBaseUrlFromHeaders();
  const lastModified = new Date();

  const home = LOCALES.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languageAlternates(baseUrl, "") },
  }));

  const caseStudies = LOCALES.flatMap((locale) =>
    CASE_STUDY_SLUGS.map((slug) => ({
      url: `${baseUrl}/${locale}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languageAlternates(baseUrl, `/projects/${slug}`) },
    }))
  );

  return [...home, ...caseStudies];
}

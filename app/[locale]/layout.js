import { notFound } from "next/navigation";
import { headers } from "next/headers";

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function getBaseUrlFromHeaders(h) {
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return new URL("https://example.com");
  return new URL(`${proto}://${host}`);
}

function seoCopy(locale) {
  if (locale === "es") {
    return {
      title: "Constantino Abba | Desarrollador Full-Stack",
      description:
        "Portfolio de Constantino Abba, desarrollador Full-Stack de Argentina. Proyectos con Next.js, React y Node.js, e-commerce e integraciones como MercadoPago. Contacto y CV.",
    };
  }

  return {
    title: "Constantino Abba | Full-Stack Developer",
    description:
      "Portfolio of Constantino Abba, a Full-Stack Developer from Argentina. Projects with Next.js, React and Node.js, e-commerce work and integrations like MercadoPago. Contact and CV.",
  };
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  if (!locales.includes(locale)) return {};

  const h = headers();
  const baseUrl = getBaseUrlFromHeaders(h);
  const url = new URL(`/${locale}`, baseUrl);
  const { title, description } = seoCopy(locale);

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: [
      "Full stack developer",
      "Desarrollador full stack",
      "Argentina",
      "LatAm",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "E-commerce",
      "MercadoPago",
      "Portfolio",
    ],
    alternates: {
      canonical: url.pathname,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      url: url.pathname,
      title,
      description,
      siteName: "Constantino Dev",
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "20f6e6b7737ad916",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const baseUrl = getBaseUrlFromHeaders(headers());
  const personUrl = new URL(`/${locale}`, baseUrl).toString();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Constantino Abba",
    url: personUrl,
    jobTitle: locale === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer",
    homeLocation: {
      "@type": "Country",
      name: "Argentina",
    },
    sameAs: [
      "https://www.linkedin.com/in/constantinoabba/",
      "https://github.com/consbenjamin",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </>
  );
}
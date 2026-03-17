import { headers } from "next/headers";

function getBaseUrlFromHeaders(h) {
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return "https://example.com";
  return `${proto}://${host}`;
}

export default function sitemap() {
  const baseUrl = getBaseUrlFromHeaders(headers());
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}


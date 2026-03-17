import { headers } from "next/headers";

function getBaseUrlFromHeaders(h) {
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return "https://example.com";
  return `${proto}://${host}`;
}

export default function robots() {
  const baseUrl = getBaseUrlFromHeaders(headers());

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Constantino Abba | Full-Stack Developer",
  description: "Portfolio de Constantino Abba — Desarrollador Full-Stack. Proyectos, habilidades y contacto.",
  icons: "/favicon.svg",
};

const themeScript = `
  (function() {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored !== null ? stored === 'true' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  })();
`;

export default async function RootLayout({ children }) {
  let lang = "en";

  const cookieStore = await cookies();
  const localeCookie = cookieStore?.get?.("locale");
  const value = localeCookie?.value;
  if (value === "es" || value === "en") {
    lang = value;
  }

  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
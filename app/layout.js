import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
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

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
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
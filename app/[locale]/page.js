'use client'

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { ArrowUp } from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import { animateScrollTo, interceptAnchorScroll, prefersReducedMotion } from "@/lib/smooth-scroll";

import en from "../../locales/en.json";
import es from "../../locales/es.json";

const SECTION_IDS = ["hero", "about", "projects", "contact"];

export default function Home() {
  const { locale } = useParams();
  const translations = locale === "es" ? es : en;

  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const topSentinel = useRef(null);

  // La sección activa es la que cruza el centro del viewport.
  useEffect(() => {
    const seen = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          seen.set(entry.target.id, entry.isIntersecting);
        }
        const active = SECTION_IDS.find((id) => seen.get(id));
        if (active) setActiveSection(active);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = topSentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Los links del menu (#about, #projects...) tienen el mismo problema que el
  // boton: con movimiento reducido el navegador los hace saltar de golpe.
  useEffect(() => interceptAnchorScroll(), []);

  const scrollToTop = () => {
    if (prefersReducedMotion()) {
      animateScrollTo(0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-[100dvh] bg-slate-50 dark:bg-slate-900">
      <div ref={topSentinel} aria-hidden className="absolute top-0 h-[400px] w-px pointer-events-none" />
      <Navbar t={translations.navbar} locale={locale} activeSection={activeSection} />
      <Hero t={translations.hero} locale={locale} />
      <About t={translations.about} />
      <Carousel t={translations.carousel} />
      <Projects t={translations.projects} locale={locale} />
      <Contact t={translations.contact} />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label={locale === "es" ? "Volver arriba" : "Back to top"}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-600/40 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      )}
    </main>
  );
}

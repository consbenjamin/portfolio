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

import en from "../../locales/en.json";
import es from "../../locales/es.json";

const SECTION_IDS = ["hero", "about", "projects", "contact"];

export default function Home() {
  const { locale } = useParams();
  const translations = locale === "es" ? es : en;

  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
      const scrollY = window.scrollY + 120;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
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
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      )}
    </main>
  );
}

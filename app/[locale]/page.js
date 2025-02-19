'use client'

import { useEffect, useState } from "react";
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

export default function Home() {
  const { locale } = useParams();
  const translations = locale === "es" ? es : en;

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar t={translations.navbar} locale={locale} />
      <Hero t={translations.hero} locale={locale} />
      <About t={translations.about} />
      <Carousel t={translations.carousel} />
      <Projects t={translations.projects} locale={locale} />
      <Contact t={translations.contact} />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-indigo-600 text-white p-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </main>
  );
}

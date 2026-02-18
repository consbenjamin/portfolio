"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#", id: "hero", labelKey: "home" },
  { href: "#about", id: "about", labelKey: "about" },
  { href: "#projects", id: "projects", labelKey: "projects" },
  { href: "#contact", id: "contact", labelKey: "contact" },
];

export default function Navbar({ t, locale, activeSection = "hero" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const switchLocale = (newLocale) => {
    const currentLocale = pathname.split("/")[1];
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  const closeMenu = () => setIsOpen(false);

  const linkClass = (id) =>
    `px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
      activeSection === id
        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
        : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700/50"
    }`;

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm rounded-b-2xl"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 min-h-0">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors truncate min-w-0"
          >
            {t.brand}
          </a>
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-center gap-1">
              {navLinks.map(({ href, id, labelKey }) => (
                <a
                  key={id}
                  href={href}
                  className={linkClass(id)}
                  onClick={id !== "hero" ? closeMenu : undefined}
                >
                  {t[labelKey]}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <div
              role="group"
              aria-label="Idioma / Language"
              className="inline-flex p-0.5 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                  locale === "en"
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 active:bg-slate-300/50 dark:active:bg-slate-600/50"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLocale("es")}
                className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                  locale === "es"
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 active:bg-slate-300/50 dark:active:bg-slate-600/50"
                }`}
              >
                ES
              </button>
            </div>
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:bg-slate-200 dark:active:bg-slate-700 transition-colors touch-manipulation"
              aria-expanded={isOpen}
              aria-label={isOpen ? t.closeMenu : t.openMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain rounded-b-2xl">
          <div className="px-3 sm:px-4 py-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-0.5">
            {navLinks.map(({ href, id, labelKey }) => (
              <a
                key={id}
                href={href}
                onClick={closeMenu}
                className={`block px-3 py-3.5 rounded-xl text-base font-medium min-h-[48px] flex items-center ${linkClass(id)}`}
              >
                {t[labelKey]}
              </a>
            ))}
            <div className="pt-4 mt-3 border-t border-slate-200 dark:border-slate-700 flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {locale === "es" ? "Idioma" : "Language"}
              </span>
              <div
                role="group"
                aria-label="Idioma / Language"
                className="inline-flex p-1 rounded-2xl bg-slate-200 dark:bg-slate-700 w-full max-w-[160px] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => { switchLocale("en"); closeMenu(); }}
                  className={`flex-1 min-h-[48px] py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 touch-manipulation ${
                    locale === "en"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 active:bg-slate-300/50 dark:active:bg-slate-600/50"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => { switchLocale("es"); closeMenu(); }}
                  className={`flex-1 min-h-[48px] py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 touch-manipulation ${
                    locale === "es"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 active:bg-slate-300/50 dark:active:bg-slate-600/50"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

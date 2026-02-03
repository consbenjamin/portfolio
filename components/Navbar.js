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

  const switchLocale = (newLocale) => {
    const currentLocale = pathname.split("/")[1];
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  const closeMenu = () => setIsOpen(false);

  const linkClass = (id) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      activeSection === id
        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
        : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700/50"
    }`;

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            {t.brand}
          </a>
          <div className="hidden md:block">
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
          <div className="flex items-center gap-3">
            <select
              onChange={(e) => switchLocale(e.target.value)}
              value={locale}
              className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-0 rounded-lg px-3 py-1.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? t.closeMenu : t.openMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ href, id, labelKey }) => (
              <a
                key={id}
                href={href}
                onClick={closeMenu}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${linkClass(id)}`}
              >
                {t[labelKey]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

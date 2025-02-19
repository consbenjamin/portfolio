"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar({ t, locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    const currentLocale = pathname.split("/")[1];
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              {t.brand}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {t.home}
              </a>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {t.about}
              </a>
              <a
                href="#projects"
                className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {t.projects}
              </a>
              <a
                href="#contact"
                className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {t.contact}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              onChange={(e) => switchLocale(e.target.value)}
              value={locale}
              className="bg-white dark:bg-gray-800 dark:text-white text-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <DarkModeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">
                  {isOpen ? t.closeMenu : t.openMenu}
                </span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t.home}
            </a>
            <a
              href="#about"
              className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t.about}
            </a>
            <a
              href="#projects"
              className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t.projects}
            </a>
            <a
              href="#contact"
              className="text-gray-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

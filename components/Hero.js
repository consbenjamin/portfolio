'use client';

import { useState, useEffect } from "react";

export default function Hero({ t, locale }) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);

  const fullText = `  const developer = {
      name: "Constantino Abba",
      role: "Full-Stack Developer",
      passion: ["JavaScript", "UX/UI", "Automation"],
    };`;

  useEffect(() => {
    if (!hasTyped) {
      if (isTyping) {
        if (text.length < fullText.length) {
          const timeout = setTimeout(() => {
            setText(fullText.slice(0, text.length + 1));
          }, 25);
          return () => clearTimeout(timeout);
        } else {
          setIsTyping(false);
          setHasTyped(true);
        }
      }
    }
  }, [text, isTyping, hasTyped]);

  const cvLink = locale === 'es' ? '/constantino_abba_cv_es.pdf' : '/constantino_abba_cv_en.pdf';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-slate-900 dark:text-white overflow-hidden px-4"
    >
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900" />
      {/* Patrón sutil */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl w-full">
        <div className="mb-8 animate-fade-in-up">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            {locale === "es" ? "Hola, soy" : "Hi, I'm"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Terminal */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 max-w-full sm:max-w-3xl mx-auto text-left animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="font-mono text-slate-800 dark:text-slate-200 text-sm sm:text-base break-words whitespace-pre-wrap">
            <span className="text-emerald-600 dark:text-emerald-400">$ </span>
            {text}
            <span
              className={`inline-block w-2 h-4 ml-0.5 align-middle bg-current ${
                isTyping ? "animate-pulse" : ""
              }`}
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3.5 text-base font-semibold rounded-xl hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
          >
            {t.viewProjects}
          </a>
          <a
            href={cvLink}
            download="Constantino-Abba-CV.pdf"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-6 py-3.5 text-base font-semibold rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
          >
            {t.downloadCV}
          </a>
        </div>
      </div>
    </section>
  );
}

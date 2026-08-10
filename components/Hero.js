'use client';

import { useState, useEffect, useLayoutEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

// useLayoutEffect corre antes del pintado, asi el rebobinado del tipeo no
// alcanza a verse. En el servidor no existe, se cae a useEffect.
const useBeforePaint = typeof window === "undefined" ? useEffect : useLayoutEffect;

const KW = "text-indigo-600 dark:text-indigo-400";
const IDENT = "text-slate-900 dark:text-slate-100";
const KEY = "text-slate-700 dark:text-slate-300";
const PUNCT = "text-slate-500 dark:text-slate-400";
const STR = "text-emerald-700 dark:text-emerald-400";

const CODE = [
  { text: "const", cls: KW },
  { text: " developer ", cls: IDENT },
  { text: "= {", cls: PUNCT },
  { text: "\n  ", cls: PUNCT },
  { text: "name", cls: KEY },
  { text: ": ", cls: PUNCT },
  { text: '"Constantino Abba"', cls: STR },
  { text: ",\n  ", cls: PUNCT },
  { text: "role", cls: KEY },
  { text: ": ", cls: PUNCT },
  { text: '"Full-Stack Developer"', cls: STR },
  { text: ",\n  ", cls: PUNCT },
  { text: "passion", cls: KEY },
  { text: ": [", cls: PUNCT },
  { text: '"JavaScript"', cls: STR },
  { text: ", ", cls: PUNCT },
  { text: '"UX/UI"', cls: STR },
  { text: ", ", cls: PUNCT },
  { text: '"Automation"', cls: STR },
  { text: "],\n};", cls: PUNCT },
];

const FULL_CODE = CODE.map((token) => token.text).join("");

export default function Hero({ t, locale }) {
  // Arranca completo: es lo que renderiza el servidor, asi el bloque nunca
  // queda vacio si el JS no llega a correr. Si puede animar, se rebobina
  // antes del primer pintado y tipea.
  const [typed, setTyped] = useState(FULL_CODE.length);
  const [done, setDone] = useState(true);

  useBeforePaint(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setTyped(0);
    setDone(false);
    // One character per tick keeps the effect on transform-free text only;
    // the panel height is reserved below, so nothing reflows while it runs.
    const id = setInterval(() => {
      setTyped((n) => {
        if (n >= FULL_CODE.length) {
          clearInterval(id);
          setDone(true);
          return n;
        }
        return n + 1;
      });
    }, 22);
    return () => clearInterval(id);
  }, []);

  const cvLink = locale === 'es' ? '/constantino_abba_cv_es.pdf' : '/constantino_abba_cv_en.pdf';

  let offset = 0;
  const painted = CODE.map((token, index) => {
    const start = offset;
    offset += token.text.length;
    if (typed <= start) return null;
    return (
      <span key={index} className={token.cls}>
        {token.text.slice(0, typed - start)}
      </span>
    );
  });

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center text-slate-900 dark:text-white overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <p
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            {locale === "es" ? "Hola, soy" : "Hi, I'm"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-slate-900 dark:text-white tracking-tight leading-[1.05] text-balance animate-fade-in-up">
            {t.title}
          </h1>
          <p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-[46ch] mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            {t.subtitle}
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row justify-center lg:justify-start items-stretch sm:items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap bg-indigo-600 text-white px-6 py-3.5 text-base font-semibold rounded-xl hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-all duration-300"
            >
              {t.viewProjects}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href={cvLink}
              download="Constantino-Abba-CV.pdf"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 px-6 py-3.5 text-base font-semibold rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-all duration-300"
            >
              <Download size={18} aria-hidden />
              {t.downloadCV}
            </a>
          </div>
        </div>

        <div
          className="lg:col-span-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
        >
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 dark:shadow-black/40 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">developer.js</span>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">JavaScript</span>
            </div>
            {/* La copia invisible reserva el alto final: el bloque no crece mientras tipea. */}
            <div className="grid p-4 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed">
              <pre className="col-start-1 row-start-1 invisible whitespace-pre-wrap break-words" aria-hidden>
                {FULL_CODE}
              </pre>
              <pre className="col-start-1 row-start-1 whitespace-pre-wrap break-words">
                {painted}
                <span
                  className={`inline-block w-[2px] h-[1.1em] ml-px align-text-bottom bg-indigo-500 ${done ? "opacity-0" : "animate-pulse"}`}
                  aria-hidden
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

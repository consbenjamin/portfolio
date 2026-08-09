'use client';

import { useEffect, useRef, useState } from "react";

export default function About({ t }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`reveal py-20 lg:py-24 bg-white dark:bg-slate-800/50 ${visible ? "reveal-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-10">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-[65ch]">
            {t.description1}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-[65ch]">
            {t.description2}
          </p>
        </div>
      </div>
    </section>
  );
}

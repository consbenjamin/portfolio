'use client';

import { useEffect, useRef, useState } from "react";

export default function About({ t }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCss",
    "Zustand",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git"
  ];

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
      className={`reveal py-20 bg-white dark:bg-slate-800/50 ${visible ? "reveal-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.description2}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t.skillsTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200/50 dark:border-slate-600/50 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

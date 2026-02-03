'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Contact({ t }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const contactLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/constantinoabba/" },
    { name: "Email", icon: Mail, href: "mailto:cons_benjamin9@outlook.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/consbenjamin" },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`reveal bg-slate-900 dark:bg-slate-950 text-slate-200 py-20 px-6 ${visible ? "reveal-visible" : ""}`}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.title}</h2>
        <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">{t.description}</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-indigo-500/50 text-slate-200 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <link.icon size={22} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span className="font-medium text-sm sm:text-base">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

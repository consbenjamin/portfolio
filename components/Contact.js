import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Contact({ t }) {
  const contactLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/constantinoabba/" },
    { name: "Email", icon: Mail, href: "mailto:cons_benjamin9@outlook.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/consbenjamin" },
  ];

  return (
    <section id="contact" className="bg-gray-950 text-gray-300 py-16 px-6 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-wide">{t.title}</h2>
      <p className="text-gray-400 mb-6 max-w-md text-center text-sm sm:text-base">{t.description}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        {contactLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-900/50 backdrop-blur-md hover:bg-gray-800 transition duration-300"
          >
            <link.icon size={20} className="text-gray-400 group-hover:text-white transition duration-300" />
            <span className="text-gray-300 group-hover:text-white transition duration-300 font-medium text-sm sm:text-base">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

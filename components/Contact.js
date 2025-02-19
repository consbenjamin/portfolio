import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Contact({ t }) {
  const contactLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/constantinoabba/" },
    { name: "Email", icon: Mail, href: "mailto:cons_benjamin9@outlook.com" },
  ];

  return (
    <section id="contact" className="bg-gray-950 text-gray-300 py-20 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-white mb-6 tracking-wide">{t.title}</h2>
      <p className="text-gray-400 mb-8 max-w-md text-center">
        {t.description}
      </p>
      <div className="flex space-x-6">
        {contactLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-5 py-3 rounded-lg bg-gray-900/50 backdrop-blur-md hover:bg-gray-800 transition duration-300"
          >
            <link.icon size={24} className="text-gray-400 group-hover:text-white transition duration-300" />
            <span className="text-gray-300 group-hover:text-white transition duration-300 font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
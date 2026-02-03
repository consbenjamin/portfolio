import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 py-8 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Constantino Abba
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/consbenjamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors p-1 rounded-lg hover:bg-slate-700/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/constantinoabba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors p-1 rounded-lg hover:bg-slate-700/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

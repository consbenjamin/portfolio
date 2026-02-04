import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Constantino Abba
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/consbenjamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/constantinoabba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800/50"
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

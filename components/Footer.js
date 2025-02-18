import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Constantino Dev. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/consbenjamin"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/constantinoabba/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

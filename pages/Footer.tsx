import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold text-indigo-600">MyPortfolio</h3>
          <p className="text-gray-200 text-sm mt-1">
            © {new Date().getFullYear()} Alazar G/Hiwot. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-indigo-600 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/alazar-g-44a0ba164/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-indigo-600 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-indigo-600 transition"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

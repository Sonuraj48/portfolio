import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sonu-raj-62042425a',
  },
  {
    icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Sonuraj48',
  },
  {
    icon: <Twitter className="w-5 h-5" />, label: 'X (Twitter)', href: 'https://x.com/Sonuraj8258',
  },
];

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sticky bottom-0 left-0 w-full z-40 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-t border-white/20 dark:border-zinc-800 shadow-lg mt-16">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200 text-sm">
          <span>&copy; {new Date().getFullYear()} Sonu Raj. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-400 shadow transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <button
          onClick={handleBackToTop}
          className="inline-flex items-center gap-1 px-4 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 
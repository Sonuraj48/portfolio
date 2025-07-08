import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 font-display drop-shadow">Sonu Raj</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={
                    `relative px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                    ${activeSection === item.id ? 'text-blue-700 dark:text-blue-400' : 'text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-400'}`
                  }
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {/* Animated underline */}
                  <span className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-6 rounded-full bg-blue-500 transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></span>
                </button>
              ))}
            </div>
            {/* Theme toggle button (logic to be added) */}
            <button
              className="ml-4 p-2 rounded-full bg-white/40 dark:bg-zinc-800/60 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 hidden dark:inline" />
              <Moon className="w-5 h-5 dark:hidden" />
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-zinc-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
              aria-label="Open navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Theme toggle button (logic to be added) */}
            <button
              className="p-2 rounded-full bg-white/40 dark:bg-zinc-800/60 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 hidden dark:inline" />
              <Moon className="w-5 h-5 dark:hidden" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-blue-400' : 'text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-400'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span>{item.label}</span>
                <span className={`block h-0.5 w-6 rounded-full bg-blue-500 mt-1 transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
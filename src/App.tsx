import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { setupScrollAnimations } from './utils/animations';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setupScrollAnimations();
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5F87A] via-[#E5F87A] to-[#D4E157] relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-green-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            top: '60%',
            right: '10%',
          }}
        />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
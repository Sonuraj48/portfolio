import React from 'react';
import { MapPin, Code, Brain, Server, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/sonu-raj-1b7b1b1b2/', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
  { href: 'https://github.com/Sonuraj48', icon: <Github className="w-6 h-6" />, label: 'GitHub' },
  { href: 'mailto:sonuraj.official48@gmail.com', icon: <Mail className="w-6 h-6" />, label: 'Email' },
];

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <motion.img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFmEkm5ZadI3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686299645634?e=1757548800&v=beta&t=g_uqj0hnhXSBVBlh3zXIiSaZG16DY9h1sA4O3KNBgp8"
                alt="Sonu Raj"
                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px #60a5fa' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-2 drop-shadow animate-slide-up"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Sonu Raj
            </motion.h1>
            <motion.div
              className="flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <MapPin size={20} className="mr-2" />
              <span className="text-lg">Jagatpura, Jaipur, Rajasthan</span>
            </motion.div>
            {/* Animated subtitle */}
            <motion.div
              className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2 h-8 min-h-[2rem] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-700 pr-2">AI/ML | DevOps | Full Stack Developer</span>
            </motion.div>
            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-2">
              {socialLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-400 shadow transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Role Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="group bg-white/30 dark:bg-zinc-900/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30 dark:border-zinc-700 hover:bg-white/50 dark:hover:bg-zinc-800/60 transition-all duration-300 hover:scale-105 shadow">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">AI/ML Engineer</span>
              </div>
            </div>
            <div className="group bg-white/30 dark:bg-zinc-900/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30 dark:border-zinc-700 hover:bg-white/50 dark:hover:bg-zinc-800/60 transition-all duration-300 hover:scale-105 shadow">
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-green-600 group-hover:animate-pulse" />
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">DevOps Engineer</span>
              </div>
            </div>
            <div className="group bg-white/30 dark:bg-zinc-900/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30 dark:border-zinc-700 hover:bg-white/50 dark:hover:bg-zinc-800/60 transition-all duration-300 hover:scale-105 shadow">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-600 group-hover:animate-pulse" />
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/40 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed">
                A highly motivated and curious <span className="font-semibold text-blue-700 dark:text-blue-400">B.Tech CSE student</span> with a passion for 
                <span className="font-semibold text-green-700 dark:text-green-400"> AI/ML and DevOps</span>. Solid foundation in programming, data structures, 
                and mathematics. Experienced in Python, data analysis, ML algorithms, and eager to work on real-world intelligent systems. 
                Exploring <span className="font-semibold text-purple-700 dark:text-purple-400">deep learning, NLP, and computer vision</span>.
              </p>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-700 rounded-full mt-2 animate-ping"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
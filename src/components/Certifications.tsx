import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'Get Started with Python',
      issuer: 'Google',
      category: 'Programming',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Full-Stack Web Developer (Intro)',
      issuer: 'Professional Certification',
      category: 'Web Development',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Management Information System',
      issuer: 'Business Technology',
      category: 'Business',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Excel Basics for Data Analysis',
      issuer: 'Data Analysis Certification',
      category: 'Data Science',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Data Visualization & Dashboards with Excel',
      issuer: 'Microsoft Excel Certification',
      category: 'Data Visualization',
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Data Analytics, OS & You: Becoming a Power User',
      issuer: 'Technical Certification',
      category: 'System Administration',
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Certifications</h2>
          <p className="text-xl text-zinc-100 max-w-3xl mx-auto drop-shadow">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative group bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Certificate icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Award className="w-8 h-8" />
              </div>

              {/* Category badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white shadow-md`}>
                  {cert.category}
                </span>
              </div>

              {/* Certificate title */}
              <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-zinc-700 dark:text-zinc-200 mb-4 font-medium">
                {cert.issuer}
              </p>

              {/* Verified badge */}
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Verified Certificate</span>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn certification link */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">View All Certifications</h3>
            </div>
            <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-2xl mx-auto">
              Explore my complete certification portfolio on LinkedIn to see detailed information about each credential and verification.
            </p>
            <a
              href="https://www.linkedin.com/in/sonu-raj-62042425a/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow"
            >
              <ExternalLink size={20} />
              <span className="font-medium">View on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Certification stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-zinc-700 dark:text-zinc-100 font-medium">Certifications</div>
          </div>
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-zinc-700 dark:text-zinc-100 font-medium">Categories</div>
          </div>
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-zinc-700 dark:text-zinc-100 font-medium">Verified</div>
          </div>
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
            <div className="text-zinc-700 dark:text-zinc-100 font-medium">Latest Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
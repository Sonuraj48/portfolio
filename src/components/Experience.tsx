import React, { useState } from 'react';
import { Building, Calendar, MapPin, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 drop-shadow">Professional Experience</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Gaining hands-on experience in DevOps and cloud technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience item */}
          <motion.div
            className="relative flex items-start space-x-8 animate-slide-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Building className="w-8 h-8 text-white" />
            </div>

            {/* Experience content */}
            <div className="flex-1 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">DevOps Intern</h3>
                  <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">LinuxWorld Informatics Pvt Ltd</h4>
                </div>
                <div className="flex flex-col sm:items-end space-y-2">
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">June 2024 – Present</span>
                  </div>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">Remote</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Key Responsibilities & Achievements:</h5>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Designed and implemented CI/CD pipelines using Jenkins for automated deployment</span>
                  </li>
                  {expanded && (
                    <>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Containerized applications using Docker for consistent deployment across environments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Orchestrated container deployments using Kubernetes for scalable applications</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Collaborated with development teams to streamline deployment processes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Implemented infrastructure as code practices for better maintainability</span>
                      </li>
                    </>
                  )}
                </ul>
                <button
                  className="mt-2 text-blue-600 hover:underline text-sm font-semibold focus:outline-none"
                  onClick={() => setExpanded(!expanded)}
                  type="button"
                >
                  {expanded ? 'Show Less' : 'Show More'}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Docker', 'Jenkins', 'Kubernetes', 'CI/CD', 'Linux', 'DevOps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/90 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Key Achievement</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                  Successfully reduced deployment time by 60% through automation and improved overall system reliability 
                  by implementing robust CI/CD pipelines and containerization strategies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
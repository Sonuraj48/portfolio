import React from 'react';
import { Code, Database, Cloud, Wrench, Brain, MessageCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'Jenkins', 'Kubernetes'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Frameworks & Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Node.js', 'Flask'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'AI/ML & Analytics',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Data Analysis', 'Problem Solving', 'Logical Thinking'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Communication',
      icon: <MessageCircle className="w-6 h-6" />,
      skills: ['Oral Communication', 'Written Communication'],
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 drop-shadow">Technical Skills</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and robust applications
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-all duration-300 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/90 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill bars */}
        <div className="mt-16 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 shadow-xl">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 text-center">Proficiency Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Python', level: 90 },
              { skill: 'Docker', level: 85 },
              { skill: 'Data Analysis', level: 80 },
              { skill: 'Jenkins', level: 75 },
              { skill: 'Machine Learning', level: 70 },
              { skill: 'Kubernetes', level: 65 }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.skill}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.level}%</span>
                </div>
                <div className="w-full bg-white/40 dark:bg-zinc-800/40 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { GraduationCap, Award, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Vivekananda Global University, Jaipur',
      duration: '2022 – Present',
      grade: 'CGPA: 9.05',
      achievements: ['Participated in multiple hackathons', 'Active member of coding clubs', 'Dean\'s List for academic excellence'],
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Senior Secondary (Class 12)',
      institution: 'Aklank Public School, Kota',
      duration: '2021',
      grade: '86.6% (CBSE)',
      achievements: ['Science stream with Mathematics', 'Focused on Physics, Chemistry, and Mathematics'],
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      degree: 'Secondary (Class 10)',
      institution: 'Notre Dame Public School, Bettiah',
      duration: '2019',
      grade: '91.4% (CBSE)',
      achievements: ['Represented school in national-level chess competition', 'Academic excellence award'],
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 drop-shadow">Education</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            A strong academic foundation building towards excellence in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500 hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={education.degree}
                className={`relative flex items-start space-x-8 animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${education.gradient} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  {education.icon}
                </div>

                {/* Education content */}
                <div className={`flex-1 max-w-2xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{education.duration}</span>
                      </div>
                      <div className={`px-4 py-2 bg-gradient-to-r ${education.gradient} text-white rounded-full text-sm font-bold shadow-md`}>
                        {education.grade}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{education.degree}</h3>
                    <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4">{education.institution}</h4>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Key Achievements:</h5>
                      {education.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-zinc-700 dark:text-zinc-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">9.05</div>
            <div className="text-zinc-700 dark:text-zinc-300 font-medium">Current CGPA</div>
          </div>
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-zinc-700 dark:text-zinc-300 font-medium">Hackathons Participated</div>
          </div>
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-zinc-700 text-center hover:bg-white/90 dark:hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-zinc-700 dark:text-zinc-300 font-medium">Years of Study</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { Code, Database, Cloud, Wrench, Brain, MessageCircle } from 'lucide-react';

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and robust applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-white/20 hover:bg-white/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated skill bars */}
        <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proficiency Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Python', level: 90 },
              { skill: 'Docker', level: 85 },
              { skill: 'Data Analysis', level: 80 },
              { skill: 'Jenkins', level: 75 },
              { skill: 'Machine Learning', level: 70 },
              { skill: 'Kubernetes', level: 65 }
            ].map((item, index) => (
              <div key={item.skill} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-800">{item.skill}</span>
                  <span className="text-sm text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
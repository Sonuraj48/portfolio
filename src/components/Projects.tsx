import React, { useState } from 'react';
import { Github, ExternalLink, Container, Brain, Server } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Docker CI/CD using Jenkins',
      description: 'Simple webpage deployed inside a Docker container using Jenkins CI/CD pipeline',
      technologies: ['Docker', 'Jenkins', 'CI/CD', 'Web Development'],
      github: 'https://github.com/Sonuraj48/docker-CI-CD-using-Jenkins',
      icon: <Server className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Dockerfile Project',
      description: 'Build and run apps using Dockerfile; image creation and container deployment',
      technologies: ['Docker', 'Containerization', 'DevOps'],
      github: 'https://github.com/Sonuraj48/mydockerproject',
      icon: <Container className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Loan Approval Prediction Web App',
      description: 'Built using Flask, Random Forest, and joblib with real-time user inference and preprocessing',
      technologies: ['Flask', 'Random Forest', 'Machine Learning', 'Python', 'joblib'],
      github: 'https://github.com/Sonuraj48/loan-approval-model',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Showcasing my expertise in AI/ML, DevOps, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up ${expandedProject === index ? 'ring-2 ring-blue-400' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Project icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              {/* Project title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project description */}
              <p className={`text-gray-700 mb-4 ${expandedProject === index ? '' : 'line-clamp-3'}`}>
                {project.description}
              </p>

              {/* Technologies */}
              <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-300 ${expandedProject === index ? '' : 'max-h-10 overflow-hidden'}`}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 border border-white/20 hover:bg-white/50 transition-all duration-300"
                    style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>

              {/* Expand/Collapse Button */}
              <button
                className="mt-4 text-blue-600 hover:underline text-sm font-semibold focus:outline-none"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                type="button"
              >
                {expandedProject === index ? 'Show Less' : 'Show More'}
              </button>

              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Floating animation on hover */}
              {hoveredProject === index && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and contributions to the open-source community.
            </p>
            <a
              href="https://github.com/Sonuraj48"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span className="font-medium">Visit My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
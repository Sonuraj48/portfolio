import React, { useState } from 'react';
import { Github, Container, Brain, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// Project type
interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  icon: 'server' | 'container' | 'brain';
  gradient: string;
  more: string[];
}

const projectData: Project[] = [
  {
    title: 'Docker CI/CD using Jenkins',
    description: 'Simple webpage deployed inside a Docker container using Jenkins CI/CD pipeline',
    technologies: ['Docker', 'Jenkins', 'CI/CD', 'Web Development'],
    github: 'https://github.com/Sonuraj48/docker-CI-CD-using-Jenkins',
    icon: 'server',
    gradient: 'from-blue-500 to-cyan-500',
    more: [
      'Automated build and deployment pipeline using Jenkins.',
      'Dockerized environment for consistent deployments.',
      'Webpage updates trigger CI/CD pipeline automatically.'
    ]
  },
  {
    title: 'Dockerfile Project',
    description: 'Build and run apps using Dockerfile; image creation and container deployment',
    technologies: ['Docker', 'Containerization', 'DevOps'],
    github: 'https://github.com/Sonuraj48/mydockerproject',
    icon: 'container',
    gradient: 'from-green-500 to-teal-500',
    more: [
      'Created custom Dockerfiles for multiple applications.',
      'Learned best practices for image optimization and security.',
      'Deployed containers on local and cloud environments.'
    ]
  },
  {
    title: 'Loan Approval Prediction Web App',
    description: 'Built using Flask, Random Forest, and joblib with real-time user inference and preprocessing',
    technologies: ['Flask', 'Random Forest', 'Machine Learning', 'Python', 'joblib'],
    github: 'https://github.com/Sonuraj48/loan-approval-model',
    icon: 'brain',
    gradient: 'from-purple-500 to-pink-500',
    more: [
      'End-to-end ML pipeline: data preprocessing, model training, and deployment.',
      'Interactive web interface for real-time loan approval predictions.',
      'Integrated joblib for efficient model serialization and inference.'
    ]
  }
];

const iconMap = {
  server: <Server className="w-8 h-8" />, 
  container: <Container className="w-8 h-8" />, 
  brain: <Brain className="w-8 h-8" />
};

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  hovered: boolean;
  onHover: (hover: boolean) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, expanded, onToggle, hovered, onHover }) => (
  <article
    className={clsx(
      'group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-500',
      expanded && 'ring-2 ring-blue-400 scale-[1.03]',
      'flex flex-col h-full'
    )}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
    tabIndex={0}
    aria-expanded={expanded}
    aria-label={`Project: ${project.title}`}
  >
    {/* Gradient overlay on hover */}
    <div className={clsx('absolute inset-0 bg-gradient-to-br', project.gradient, 'opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none')}></div>

    {/* Project icon */}
    <div className={clsx('inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r', project.gradient, 'text-white mb-4 group-hover:scale-110 transition-transform duration-300')}>
      {iconMap[project.icon]}
    </div>

    {/* Project title */}
    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-700 transition-colors duration-300 drop-shadow">
      {project.title}
    </h3>

    {/* Project description */}
    <p className={clsx('text-zinc-700 dark:text-zinc-300 mb-3', expanded ? '' : 'line-clamp-3')}>{project.description}</p>

    {/* Technologies */}
    <div className={clsx('flex flex-wrap gap-2 mb-4 transition-all duration-300', expanded ? '' : 'max-h-10 overflow-hidden')}>
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-zinc-700 hover:bg-white/90 dark:hover:bg-zinc-700 transition-all duration-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Project links */}
    <div className="flex space-x-4 mb-2">
      <button
        onClick={e => {
          e.stopPropagation();
          window.open(project.github, '_blank', 'noopener,noreferrer');
        }}
        className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-800 text-white rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        type="button"
        aria-label={`Open ${project.title} on GitHub`}
      >
        <Github size={18} />
        <span className="text-sm font-medium">GitHub</span>
      </button>
    </div>

    {/* Expand/Collapse Button */}
    <button
      className="mt-auto flex items-center gap-1 text-blue-600 hover:underline text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
      onClick={e => {
        e.stopPropagation();
        onToggle();
      }}
      type="button"
      aria-expanded={expanded}
      aria-controls={`project-details-${project.title.replace(/\s+/g, '-')}`}
    >
      <motion.span
        animate={{ rotate: expanded ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        ▶
      </motion.span>
      {expanded ? 'Show Less' : 'Show More'}
    </button>

    {/* Expanded content for Show More */}
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          id={`project-details-${project.title.replace(/\s+/g, '-')}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden mt-2"
        >
          <ul className="text-zinc-800 dark:text-zinc-200 text-sm list-disc list-inside pl-2">
            {project.more.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Animated border effect */}
    <div className={clsx('absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r', project.gradient, 'opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none')}></div>
    {/* Floating animation on hover */}
    {hovered && (
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping pointer-events-none"></div>
    )}
  </article>
);

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 drop-shadow">Featured Projects</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Showcasing my expertise in AI/ML, DevOps, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              expanded={expandedProject === index}
              onToggle={() => setExpandedProject(expandedProject === index ? null : index)}
              hovered={hoveredProject === index}
              onHover={hover => setHoveredProject(hover ? index : null)}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-zinc-700 shadow-xl">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Interested in My Work?</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and contributions to the open-source community.
            </p>
            <a
              href="https://github.com/Sonuraj48"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 shadow"
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
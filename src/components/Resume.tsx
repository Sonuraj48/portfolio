import React from 'react';
import { Download, FileText, Eye, Star, Award, Calendar } from 'lucide-react';

const Resume = () => {
  const resumeStats = [
    {
      icon: <Award className="w-6 h-6" />,
      label: 'CGPA',
      value: '9.05',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: 'Projects',
      value: '3+',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Experience',
      value: '6+ Months',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: 'Certifications',
      value: '6+',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    // For demo purposes, we'll create a placeholder action
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file URL
    link.download = 'Sonu_Raj_Resume.pdf';
    link.click();
    
    // Show a message since we don't have an actual file
    alert('Resume download would start here. Please replace with actual resume file URL.');
  };

  const handleViewResume = () => {
    // In a real application, this would open the resume in a new tab
    window.open('#', '_blank'); // Replace with actual resume file URL
    
    // Show a message since we don't have an actual file
    alert('Resume preview would open here. Please replace with actual resume file URL.');
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow">Resume</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Download my complete resume or view it online to learn more about my experience and qualifications
          </p>
        </div>

        {/* Resume preview card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 mb-12 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up">
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Resume preview mockup */}
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-white rounded-lg shadow-lg border border-gray-200 relative overflow-hidden group flex flex-col">
                {/* Realistic resume preview */}
                <div className="p-4 flex flex-col h-full justify-between">
                  {/* Name */}
                  <div>
                    <div className="h-5 bg-gray-800 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-blue-500 rounded w-1/2 mb-2"></div>
                    {/* Contact info */}
                    <div className="h-2 bg-gray-400 rounded w-2/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2 mb-4"></div>
                  </div>
                  {/* Section: Education */}
                  <div>
                    <div className="h-3 bg-purple-500 rounded w-1/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3 mb-2"></div>
                  </div>
                  {/* Section: Experience */}
                  <div>
                    <div className="h-3 bg-green-500 rounded w-1/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/5 mb-2"></div>
                  </div>
                  {/* Section: Skills */}
                  <div>
                    <div className="h-3 bg-orange-500 rounded w-1/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Resume info */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">Professional Resume</h3>
              <p className="text-white mb-6 leading-relaxed">
                Comprehensive overview of my educational background, technical skills, professional experience, 
                and achievements in AI/ML and DevOps engineering. Updated regularly with latest accomplishments 
                and certifications.
              </p>

              {/* Action buttons */}
              <div className="flex justify-center">
                <a
                  href="/Sonu_Raj_Resume.pdf" // Replace with your provided resume file name and extension
                  download
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  <span className="font-medium text-white">Download Resume</span>
                </a>
              </div>

              {/* File info */}
              <div className="mt-6 text-sm text-white">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <span className="flex items-center space-x-1">
                    <FileText size={16} />
                    <span className="text-white">PDF Format</span>
                  </span>
                  <span className="text-white">•</span>
                  <span className="text-white">Last updated: January 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resumeStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key sections overview */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h4 className="text-2xl font-bold text-white mb-6 text-center">What's Inside My Resume</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Professional Summary</h5>
                  <p className="text-sm text-white">Focused on AI/ML and DevOps engineering</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Technical Skills</h5>
                  <p className="text-sm text-white">Programming, databases, DevOps tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Project Portfolio</h5>
                  <p className="text-sm text-white">Detailed project descriptions and achievements</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Work Experience</h5>
                  <p className="text-sm text-white">DevOps internship and achievements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Education</h5>
                  <p className="text-sm text-white">Academic background and achievements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-white">Certifications</h5>
                  <p className="text-sm text-white">Professional certifications and credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Let's Connect!</h4>
            <p className="text-lg mb-6 opacity-90">
              Interested in my background? Let's discuss opportunities and how I can contribute to your team.
            </p>
            <a
              href="mailto:sonurajgupta2003@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-medium"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
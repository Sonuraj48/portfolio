import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter, Container } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9472444514',
      href: 'tel:+919472444514',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sonurajgupta2003@gmail.com',
      href: 'mailto:sonurajgupta2003@gmail.com',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Jagatpura, Jaipur, Rajasthan',
      href: '#',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sonu-raj-62042425a',
      color: 'from-blue-600 to-blue-800',
      username: 'sonu-raj-62042425a'
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      href: 'https://github.com/Sonuraj48',
      color: 'from-gray-700 to-gray-900',
      username: 'Sonuraj48'
    },
    {
      icon: <Container className="w-8 h-8" />,
      label: 'DockerHub',
      href: 'https://hub.docker.com/u/sonuraj48',
      color: 'from-blue-500 to-cyan-600',
      username: 'sonuraj48'
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      label: 'X (Twitter)',
      href: 'https://x.com/Sonuraj8258',
      color: 'from-gray-800 to-black',
      username: 'Sonuraj8258'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Contact Me</h2>
          <p className="text-xl text-zinc-100 max-w-3xl mx-auto drop-shadow">
            Let's connect and explore opportunities in AI/ML, DevOps, and innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center space-x-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-100">{info.label}</div>
                      <div className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick message */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-bold text-white mb-3">Available for Opportunities</h4>
              <p className="text-zinc-100">
                I'm actively looking for opportunities in AI/ML engineering, DevOps, and full-stack development. 
                Open to internships, full-time positions, and collaborative projects.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-zinc-100">{social.label}</div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                        @{social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional focus */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-bold text-white mb-3">Professional Focus</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-zinc-100">AI/ML Engineering & Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-100">DevOps & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-zinc-100">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-zinc-100">Data Science & Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's build something amazing together. Reach out for opportunities, projects, or just to connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sonurajgupta2003@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-raj-62042425a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { MapPin, Code, Brain, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFmEkm5ZadI3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686299645634?e=1757548800&v=beta&t=g_uqj0hnhXSBVBlh3zXIiSaZG16DY9h1sA4O3KNBgp8"
                alt="Sonu Raj"
                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
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
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2 animate-slide-up">
              Sonu Raj
            </h1>
            <div className="flex items-center justify-center text-gray-700 mb-4">
              <MapPin size={20} className="mr-2" />
              <span className="text-lg">Jagatpura, Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Role Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-800">AI/ML Engineer</span>
              </div>
            </div>
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-green-600 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-800">DevOps Engineer</span>
              </div>
            </div>
            <div className="group bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-600 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-800">Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-gray-800 leading-relaxed">
                A highly motivated and curious <span className="font-semibold text-blue-700">B.Tech CSE student</span> with a passion for 
                <span className="font-semibold text-green-700"> AI/ML and DevOps</span>. Solid foundation in programming, data structures, 
                and mathematics. Experienced in Python, data analysis, ML algorithms, and eager to work on real-world intelligent systems. 
                Exploring <span className="font-semibold text-purple-700">deep learning, NLP, and computer vision</span>.
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
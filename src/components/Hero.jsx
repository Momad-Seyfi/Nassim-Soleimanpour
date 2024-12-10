import React from 'react';
import { MoveDownRight } from 'lucide-react';

export function Hero() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    worksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-red/10" />
      <div className="absolute inset-0">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5c6dc204b10f25a6b9b03be7/1551338937127-F9Z2QGQD5K9A9CQPZ4KR/IMG_3181-2.jpg" 
          alt="Nassim Soleimanpour" 
          className="object-cover w-full h-full opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Breaking the
            <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
              {" "}boundaries{" "}
            </span>
            of theater
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8">
            Award-winning playwright and theater maker, known for innovative works that challenge
            conventional theatrical experiences.
          </p>
          <button 
            onClick={scrollToWorks}
            className="group flex items-center space-x-2 bg-gradient-to-r from-brand-blue to-brand-red text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>Discover My Works</span>
            <MoveDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { MoveDownRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-red-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Breaking the
          <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {" "}boundaries{" "}
          </span>
          of theater
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Award-winning playwright and theater maker, known for innovative works that challenge
          conventional theatrical experiences.
        </p>
        <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          <span>Discover My Works</span>
          <MoveDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
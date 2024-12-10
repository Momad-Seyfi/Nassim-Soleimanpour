import React from 'react';
import { Theater, Users, Globe, Mic2 } from 'lucide-react';
import { works } from '../data/works';

export function Works() {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Notable Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work) => (
            <div key={work.title} className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-red rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
              <work.icon className="w-10 h-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-600 mb-4">{work.description}</p>
              <span className="text-sm text-brand-red font-medium">{work.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
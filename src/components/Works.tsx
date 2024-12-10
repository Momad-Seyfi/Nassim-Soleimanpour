import React from 'react';
import { Theater, Users, Globe } from 'lucide-react';

export function Works() {
  const works = [
    {
      title: "White Rabbit, Red Rabbit",
      description: "An internationally acclaimed play performed by a different actor each night, who sees the script for the first time on stage.",
      icon: Theater,
      year: "2011",
    },
    {
      title: "BLANK",
      description: "A story-making machine that allows the audience to become co-creators of the narrative.",
      icon: Users,
      year: "2015",
    },
    {
      title: "NASSIM",
      description: "A play about language, friendship, and connections across borders.",
      icon: Globe,
      year: "2017",
    },
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Notable Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.title} className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-red-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
              <work.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-600 mb-4">{work.description}</p>
              <span className="text-sm text-red-600 font-medium">{work.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
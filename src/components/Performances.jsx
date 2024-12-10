import React from 'react';
import { MapPin, Award } from 'lucide-react';
import { performances } from '../data/performances';

export function PerformanceCard({ title, venues, awards, image, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 h-48">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-6 md:p-8 flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {venues.map((venue) => (
                  <span
                    key={venue}
                    className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {venue}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{awards}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Performances() {
  return (
    <section id="performances" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Global Performances</h2>
        <div className="space-y-8 md:space-y-12">
          {performances.map((performance) => (
            <PerformanceCard key={performance.title} {...performance} />
          ))}
        </div>
      </div>
    </section>
  );
}
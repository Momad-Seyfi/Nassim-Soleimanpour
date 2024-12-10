import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export function Performances() {
  const performances = [
    {
      title: "White Rabbit, Red Rabbit",
      venues: [
        "Edinburgh Fringe Festival",
        "Gate Theatre (London)",
        "Summerworks Festival (Toronto)",
        "Brisbane Festival"
      ],
      awards: "Edinburgh Fringe First Award 2011",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=2669",
      description: "Performed in over 25 languages across more than 50 countries"
    },
    {
      title: "NASSIM",
      venues: [
        "Bush Theatre (London)",
        "New York City's Public Theater",
        "Traverse Theatre (Edinburgh)"
      ],
      awards: "Outstanding Solo Performance - Off Broadway Alliance Award 2019",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2670",
      description: "A play about language and friendship, performed in multiple languages worldwide"
    },
    {
      title: "BLANK",
      venues: [
        "Dance Base (Edinburgh)",
        "Kunstfest Weimar (Germany)",
        "Aurora Nova (Melbourne)"
      ],
      awards: "Total Theatre Award Nominee",
      image: "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?auto=format&fit=crop&q=80&w=2670",
      description: "Interactive performance where audience members help create the script"
    }
  ];

  return (
    <section id="performances" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Global Performances</h2>
        <div className="space-y-12">
          {performances.map((performance) => (
            <PerformanceCard key={performance.title} {...performance} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PerformanceCardProps {
  title: string;
  venues: string[];
  awards: string;
  image: string;
  description: string;
}

function PerformanceCard({ title, venues, awards, image, description }: PerformanceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-64 object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
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
              <Award className="w-5 h-5 text-red-600" />
              <span className="text-sm text-red-600">{awards}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
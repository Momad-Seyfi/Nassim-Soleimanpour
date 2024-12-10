import React from 'react';
import { BookOpen, Globe2, Award, Sparkles } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: BookOpen,
      title: "Innovative Playwright",
      description: "Creator of unique theatrical experiences that transcend traditional boundaries"
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Works performed in over 25 languages across more than 50 countries"
    },
    {
      icon: Award,
      title: "Award Winner",
      description: "Recipient of multiple prestigious awards including Dublin Fringe Festival Award"
    },
    {
      icon: Sparkles,
      title: "Theatrical Revolution",
      description: "Pioneer of actor-less plays and audience participation theater"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Nassim</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Born in Tehran, Iran, Nassim Soleimanpour is an internationally acclaimed playwright and theater maker known for his innovative and unconventional approach to theater. His unique journey began when he was unable to leave Iran due to his refusal to participate in military service, leading him to create plays that could travel without him.
              </p>
              <p>
                His most famous work, "White Rabbit, Red Rabbit," written in 2010, has been translated into more than 25 languages and performed over 2000 times by renowned actors including Whoopi Goldberg, Nathan Lane, and Stephen Fry. The play's unique format requires no rehearsals, no director, and a different actor for each performance who sees the script for the first time on stage.
              </p>
              <p>
                Since 2013, Soleimanpour has been able to travel and has lived in Berlin, where he continues to create groundbreaking works that challenge theatrical conventions. His plays "BLANK," "NASSIM," and others have garnered critical acclaim and numerous awards worldwide.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-red-600/10 rounded-2xl transform rotate-3" />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c6dc204b10f25a6b9b03be7/1550912940077-8ZNWZY9ZRPQEQZSQFOAJ/Nassim+Soleimanpour+2.jpg"
              alt="Nassim Soleimanpour Portrait"
              className="relative rounded-2xl shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-red-100 mb-4">
                <achievement.icon className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
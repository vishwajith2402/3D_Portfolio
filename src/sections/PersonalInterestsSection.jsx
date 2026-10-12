import React from 'react';
import { PERSONAL_INTERESTS } from '../data/portfolioData';
import { Sparkles, Gamepad2, Puzzle, BookOpen, GraduationCap } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Gamepad2: Gamepad2,
  Puzzle: Puzzle,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
};

export const PersonalInterestsSection = () => {
  return (
    <section id="interests" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            09 // Beyond The Code
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Interests</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Passions and curiosities that fuel algorithmic thinking and creative problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PERSONAL_INTERESTS.map((item) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-[#111827]/60 border border-purple-500/20 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group text-center flex flex-col items-center"
              >
                <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-cyan-400 mb-3 group-hover:scale-110 group-hover:border-cyan-400/50 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

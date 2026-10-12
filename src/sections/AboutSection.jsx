import React from 'react';
import { DigitalAvatar } from '../components/DigitalAvatar';
import { PROFILE } from '../data/portfolioData';
import { GraduationCap, MapPin, Award, Compass, Cpu, Target } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            01 // Profile & Identity
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Vishwajith</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Digital Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <DigitalAvatar />
            <p className="text-xs font-mono text-slate-400 mt-4 text-center max-w-xs">
              Futuristic digital persona representing algorithmic intelligence & neural computing.
            </p>
          </div>

          {/* Right Column: Narrative & Academic Profile */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>AI Engineering & Applied Research</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {PROFILE.intro}
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My work centers on solving complex computational challenges—bridging mathematical theory with performant software systems. Rather than viewing machine learning purely as disconnected algorithms, I focus on end-to-end architectures: from real-time data ingestion and computer vision processing to predictive modeling and intuitive analytical dashboards.
              </p>
            </div>

            {/* Academic profile card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/30 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Degree Program</span>
                  <span className="font-semibold text-sm text-slate-100 block mt-0.5">{PROFILE.degree}</span>
                  <span className="text-xs text-purple-300/80 block mt-1">{PROFILE.college}</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Academic Standing</span>
                  <span className="font-semibold text-sm text-slate-100 block mt-0.5">CGPA: {PROFILE.cgpa}</span>
                  <span className="text-xs text-cyan-300/80 block mt-1">{PROFILE.year} • Expected 2028</span>
                </div>
              </div>
            </div>

            {/* Career Interests Pills */}
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                Target Career Roles & Opportunities
              </span>
              <div className="flex flex-wrap gap-2">
                {PROFILE.careerInterests.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

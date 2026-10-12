import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Building, ChevronRight, Calendar } from 'lucide-react';

export const ExperienceSection = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            04 // Practical Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Timeline</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Verified internship track records in AI Engineering, Business Intelligence, and Applied Machine Learning.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Interactive Vertical Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline List / Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {EXPERIENCE_DATA.map((exp, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={exp.role + exp.organization}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-950/60 to-slate-900 border-cyan-400/50 shadow-[0_10px_25px_rgba(34,211,238,0.15)] translate-x-2'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-purple-500/30 hover:bg-slate-900/70 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isActive
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                          : 'bg-slate-800/50 border-slate-700/50 text-slate-400'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-purple-300 block">
                        {exp.organization}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-white mt-0.5">
                        {exp.role}
                      </h4>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                      isActive
                        ? 'bg-purple-900/50 border-purple-400/40 text-purple-200'
                        : 'bg-slate-800/40 border-slate-700/40 text-slate-400'
                    }`}
                  >
                    {exp.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Deep Detail Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-500/20">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 mb-2">
                    <Building className="w-3.5 h-3.5" />
                    {EXPERIENCE_DATA[selectedIdx].organization}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {EXPERIENCE_DATA[selectedIdx].role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{EXPERIENCE_DATA[selectedIdx].period}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Verified Engagement Scope
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
                  {EXPERIENCE_DATA[selectedIdx].description}
                </p>
              </div>

              {/* Verified policy alert note */}
              <div className="mt-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-300/80 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>
                  Responsibilities and deliverables strictly correspond to validated institution records.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

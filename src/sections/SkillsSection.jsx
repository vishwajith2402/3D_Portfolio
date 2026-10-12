import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code, Brain, Eye, BarChart3, Layers, Terminal, Sparkles } from 'lucide-react';

const iconMap = {
  Code: Code,
  Brain: Brain,
  Eye: Eye,
  BarChart3: BarChart3,
  Layers: Layers,
  Terminal: Terminal,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            02 // Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Toolchains</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-3">
            Grouped technical skills and verified proficiencies across AI, Vision, Analytics, and Modern Development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-900/30 font-semibold'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {SKILLS_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat.category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-900/30 font-semibold'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Grid of Skill Cards with 3D Card Hover / Restrained Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.category}
                className="group relative p-6 rounded-2xl bg-[#111827]/70 border border-purple-500/20 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)] flex flex-col justify-between"
              >
                {/* Ambient Card Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-cyan-500/15 transition-all" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-950/40 group-hover:border-cyan-400/50 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-purple-400/80 uppercase tracking-widest block">
                        Category 0{idx + 1}
                      </span>
                      <h3 className="font-bold text-lg text-white group-hover:text-cyan-200 transition-colors">
                        {item.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/90 border border-slate-700/70 text-slate-200 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 group-hover:text-cyan-200 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle card bottom accent */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.skills.length} Competencies</span>
                  <span className="text-cyan-400/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    Active Stack •
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

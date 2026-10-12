import React from 'react';
import { RESEARCH_INTERESTS } from '../data/portfolioData';
import { Eye, Cpu, FileText, Layers, Globe, Compass, Sparkles } from 'lucide-react';

const iconMap = {
  Eye: Eye,
  Cpu: Cpu,
  FileText: FileText,
  Layers: Layers,
  Globe: Globe,
  Compass: Compass,
};

export const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            05 // Academic Exploration
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Interests</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Core scientific questions and machine learning domains of dedicated exploration—presented as prospective research directions and learning areas.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_INTERESTS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-[#111827]/70 border border-purple-500/20 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 group-hover:bg-cyan-950/40 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800">
                      AREA // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-purple-300/80">
                  <span>Interest & Future Focus</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            03 // Featured Implementations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Real implementations adhering to factual verification. Each project features dedicated technical case studies detailing architecture and limitations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#111827]/80 border border-purple-500/25 hover:border-cyan-400/50 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)]"
            >
              {/* Corner Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-600/15 via-cyan-400/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:from-cyan-500/25 transition-all" />

              <div>
                {/* Header row: Index & Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    PRJ // 0{idx + 1}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium ${
                      project.statusColor === 'emerald'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : project.statusColor === 'cyan'
                        ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
                        : 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {project.statusColor === 'cyan' ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <AlertCircle className="w-3 h-3" />
                    )}
                    {project.statusBadge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Short summary */}
                <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                  {project.shortSummary}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-purple-950/40 text-purple-300 border border-purple-500/20">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-purple-950/50 border border-slate-700/60 hover:border-purple-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-900/30 group-hover:scale-[1.02]"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

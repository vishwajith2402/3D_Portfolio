import React from 'react';
import { ExternalLink, GitBranch, Terminal, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { PROFILE, PROJECTS_DATA } from '../data/portfolioData';

export const GithubSection = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            07 // Source Control & Open Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Showcase</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Public repositories and open source explorations. Factual repository links without fabricated metrics.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* GitHub Highlight Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-[#0D0D0D] rounded-2xl flex items-center justify-center">
                  <GithubIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>vishwajith2402</span>
                </h3>
                <p className="text-xs font-mono text-purple-300">
                  github.com/vishwajith2402 • Verified Student Developer
                </p>
              </div>
            </div>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02]"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Repositories preview */}
          <div className="pt-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              Verified Public Repositories
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <a
                  key={proj.id}
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all group block"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-300 group-hover:text-cyan-200">
                      {proj.id}
                    </span>
                    <GitBranch className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <h5 className="font-semibold text-sm text-white mb-2 line-clamp-1">
                    {proj.title}
                  </h5>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {proj.shortSummary}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-purple-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{proj.technologies[0]}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

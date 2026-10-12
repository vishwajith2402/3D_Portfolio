import React from 'react';
import { ArrowUp, Mail, BrainCircuit, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PROFILE } from '../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-12 border-t border-purple-500/20 bg-[#0A0E17]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#22D3EE] p-[1.5px]">
                <div className="w-full h-full bg-[#0D0D0D] rounded-xl flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white">
                  {PROFILE.name}
                </span>
                <span className="text-xs font-mono text-purple-300 block -mt-0.5">
                  {PROFILE.title}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Engineering reliable computational intelligence, deep neural representations, and impactful machine learning systems.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-slate-400 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-400/50 text-slate-400 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.socials.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-slate-400 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Academic summary */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs font-mono mb-4"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
            <p className="text-[11px] font-mono text-slate-500 text-left md:text-right">
              {PROFILE.college}<br />
              {PROFILE.degree}
            </p>
          </div>

        </div>

        {/* Bottom copyright row (No resume button per specification) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {currentYear} {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Three.js & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

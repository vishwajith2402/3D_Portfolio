import React, { Suspense, useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { PROFILE } from '../data/portfolioData';
import { NeuralBrainCanvas, BrainFallback } from '../components/NeuralBrainCanvas';

export const HeroSection = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-200 text-xs font-mono mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{PROFILE.title}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">Class of {PROFILE.graduation}</span>
            </div>

            {/* Headline from PDF */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Turning Ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                Intelligent Systems
              </span>
            </h1>

            {/* Intro excerpt */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              {PROFILE.intro}
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{PROFILE.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('skills')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-slate-200 bg-slate-900/60 border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-slate-800/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{PROFILE.ctaSecondary}</span>
              </button>
            </div>

            {/* Quick credentials & Socials */}
            <div className="pt-6 border-t border-purple-500/15 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-900/20 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-900/20 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.socials.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-900/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>CGPA: <strong className="text-cyan-400">{PROFILE.cgpa}</strong></span>
                <span className="text-slate-600">•</span>
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Neural Brain */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Tech decorative frame border */}
            <div className="w-full relative rounded-3xl p-2 bg-gradient-to-b from-purple-500/20 via-transparent to-cyan-500/20 border border-purple-500/20 backdrop-blur-sm">
              <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden bg-[#0D0D0D]/60 relative flex items-center justify-center">
                {hasWebGL ? (
                  <Suspense fallback={<BrainFallback />}>
                    <NeuralBrainCanvas />
                  </Suspense>
                ) : (
                  <BrainFallback />
                )}
                
                {/* 3D scene overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/60 border border-purple-500/20 backdrop-blur-md text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Sparkles className="w-3 h-3" />
                    3D Interactive Neural Cortex
                  </span>
                  <span className="text-slate-400 hidden sm:inline">Drag to Orbit</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

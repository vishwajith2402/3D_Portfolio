import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2, AlertTriangle, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-slate-400 mb-6">The requested project case study does not exist.</p>
        <Link to="/" className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-medium">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Back button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Featured Projects</span>
          </Link>

          {/* Header block */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  project.statusColor === 'cyan'
                    ? 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300'
                    : project.statusColor === 'emerald'
                    ? 'bg-emerald-950/60 border-emerald-400/30 text-emerald-300'
                    : 'bg-amber-950/60 border-amber-400/30 text-amber-300'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {project.shortSummary}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Repo Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Verify Source Code on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Deep Case Study Sections */}
          <div className="space-y-10">
            {/* Problem Statement & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 sm:p-7 rounded-2xl">
                <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-300 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Problem Statement
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="glass-panel p-6 sm:p-7 rounded-2xl">
                <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono text-purple-300 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Engineering Objective
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>

            {/* Approach & Architecture */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Approach & System Architecture</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* Implemented Features */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Verified Implemented Features</span>
              </h2>
              <ul className="space-y-3">
                {project.implementedFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-xs font-mono text-cyan-400 mt-1 font-bold">0{i+1}.</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations & Future Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                <h3 className="text-sm font-bold text-amber-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Scope Boundaries & Limitations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.limitations}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30">
                <h3 className="text-sm font-bold text-purple-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  Planned Future Enhancements
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {project.futureEnhancements.map((enh, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{enh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

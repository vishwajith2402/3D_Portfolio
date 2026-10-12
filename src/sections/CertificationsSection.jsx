import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            06 // Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Training</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Accredited courseware and technical certifications across cloud, databases, and applied data science.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.issuer + cert.title}
              className="p-6 rounded-2xl bg-[#111827]/70 border border-purple-500/20 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300">
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Issuer
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Curriculum focus: <span className="text-slate-300">{cert.focus}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  Official Program
                </span>
                <span className="text-slate-400 text-[10px]">Audit Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

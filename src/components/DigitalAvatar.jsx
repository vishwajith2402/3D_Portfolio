import React from 'react';

export const DigitalAvatar = () => {
  return (
    <div className="relative group w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Outer Glow Halo with Luxury Purple/Cyan Palette */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
      
      {/* Avatar Container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/40 bg-[#0D0D0D]/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 shadow-2xl">
        
        {/* Subtle Cyber Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#22D3EE_1px,transparent_1px)] [background-size:16px_16px]" 
        />
        
        {/* Futuristic Digital Silhouette Avatar with Purple-Cyan Rim Lighting */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[2px] bg-gradient-to-tr from-[#6D28D9] via-transparent to-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center overflow-hidden relative">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-300">
              <defs>
                <linearGradient id="avatarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6D28D9" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              {/* Silhouette head and shoulders */}
              <circle cx="50" cy="40" r="22" fill="#1e293b" stroke="url(#avatarGlow)" strokeWidth="1.5" />
              <path d="M 18 90 C 22 66, 38 64, 50 64 C 62 64, 78 66, 82 90 Z" fill="#1e293b" stroke="url(#avatarGlow)" strokeWidth="1.5" />
              {/* Neural circuit overlay on avatar */}
              <path d="M 38 40 L 44 46 L 56 34 L 62 40" stroke="#22D3EE" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
              <circle cx="44" cy="46" r="1.5" fill="#6D28D9" />
              <circle cx="56" cy="34" r="1.5" fill="#22D3EE" />
            </svg>
            
            {/* Ambient Cyan Rim Light Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/10 pointer-events-none" />
          </div>
        </div>

        {/* Verified Badge / Identity Info */}
        <div className="mt-4 text-center z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/70 border border-purple-500/30 text-purple-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Digital Persona • AI Engineer
          </div>
        </div>
      </div>
    </div>
  );
};

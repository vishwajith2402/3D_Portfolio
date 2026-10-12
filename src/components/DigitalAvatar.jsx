import React, { useState } from 'react';
import { Activity, RefreshCw, UserCheck } from 'lucide-react';

export const DigitalAvatar = () => {
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  return (
    <div className="relative group w-72 h-84 sm:w-88 sm:h-96 mx-auto select-none">
      {/* Outer Executive Luxury Glow (Subtle Purple-Cyan Rim) */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-700 to-cyan-500 opacity-50 blur-2xl group-hover:opacity-80 group-hover:blur-3xl transition-all duration-700 animate-pulse-slow" />
      
      {/* Precision Frame Border */}
      <div className="absolute -inset-1 rounded-3xl border border-purple-500/30 group-hover:border-cyan-400/60 transition-all duration-500 pointer-events-none" />

      {/* Main Glass Panel */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0A0E17]/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between p-4 transition-transform duration-500 group-hover:scale-[1.02]">
        
        {/* Top Header Bar with Mode Switcher */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/60 border border-purple-500/30 text-[10px] font-mono text-cyan-300 z-20 backdrop-blur-md">
          <span className="flex items-center gap-1.5 font-bold">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            {showRealPhoto ? 'RAW_PORTRAIT // CAPTURE' : 'FORMAL_EXECUTIVE // 3D'}
          </span>

          {/* Toggle between Formal 3D Render and Reference Capture */}
          <button
            onClick={() => setShowRealPhoto((prev) => !prev)}
            title="Toggle between Formal 3D Avatar and Reference Photo"
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-900/50 hover:bg-cyan-900/60 text-purple-200 hover:text-cyan-200 border border-purple-400/40 hover:border-cyan-400/40 transition-colors"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            <span>{showRealPhoto ? 'Switch to 3D' : 'Switch to Real'}</span>
          </button>
        </div>

        {/* Center Portrait Image Frame */}
        <div className="relative flex-1 my-3 rounded-2xl overflow-hidden border border-purple-500/25 flex items-center justify-center bg-slate-950">
          
          <img
            src={showRealPhoto ? '/real-photo.png' : '/avatar.jpg'}
            alt="Vishwajith P - Professional Profile"
            className="w-full h-full object-cover object-top filter saturate-105 contrast-105 group-hover:scale-105 transition-all duration-700"
          />

          {/* Subtle Ambient Studio Lighting Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Status Badge */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/80 border border-purple-500/30 backdrop-blur-md text-[10px] font-mono text-slate-300">
            <span className="flex items-center gap-1 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              {showRealPhoto ? 'Reference Photo' : 'Formal 3D Render'}
            </span>
            <span className="text-purple-300 font-semibold">Tiruchirappalli, IN</span>
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div className="px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs font-mono z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Vishwajith P</span>
          </div>
          <span className="text-[11px] text-cyan-300 font-medium">B.E. AIML Student</span>
        </div>

      </div>
    </div>
  );
};

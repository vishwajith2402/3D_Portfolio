import React, { useState } from 'react';
import { Cpu, Sparkles, Terminal, Activity, ShieldCheck } from 'lucide-react';

export const DigitalAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-72 h-80 sm:w-84 sm:h-96 mx-auto perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Multi-layered Volumetric Aura (Purple & Cyan Dribbble Ascend style) */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 opacity-60 blur-2xl group-hover:opacity-90 group-hover:blur-3xl transition-all duration-700 animate-pulse-slow" />
      
      {/* Rotating Cyber Accent Ring */}
      <div className="absolute -inset-1 rounded-3xl border border-cyan-400/30 group-hover:border-cyan-400/80 transition-all duration-500 pointer-events-none" />

      {/* Main Glass HUD Container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/40 bg-[#0A0E17]/90 backdrop-blur-2xl shadow-2xl flex flex-col justify-between p-4 transition-transform duration-500 group-hover:scale-[1.02]">
        
        {/* Top HUD Telemetry Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/60 border border-purple-500/30 text-[10px] font-mono text-cyan-300 z-20 backdrop-blur-md">
          <span className="flex items-center gap-1.5 font-bold">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            NEURAL_IDENTITY // ACTIVE
          </span>
          <span className="text-purple-300">v2.8.4</span>
        </div>

        {/* Center Image Container with Scanlines & Cyber Rim Lighting */}
        <div className="relative flex-1 my-3 rounded-2xl overflow-hidden border border-cyan-400/30 group/img flex items-center justify-center bg-slate-950">
          
          {/* Real AI Persona Portrait */}
          <img
            src="/avatar.jpg"
            alt="Vishwajith P - AI Persona"
            className="w-full h-full object-cover object-center filter saturate-110 contrast-105 group-hover:scale-105 transition-all duration-700"
            onError={(e) => {
              // Fallback to high tech geometric SVG if local image failed
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* Holographic Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-purple-600/20 pointer-events-none mix-blend-overlay" />
          
          {/* Moving Radar Scan Beam */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60 animate-bounce pointer-events-none" style={{ animationDuration: '4s' }} />

          {/* Interactive Neural Nodes Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/70 border border-purple-500/30 backdrop-blur-md text-[10px] font-mono text-slate-300">
            <span className="flex items-center gap-1 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Vision & Deep Learning
            </span>
            <span className="text-purple-400 font-bold">NODE #2402</span>
          </div>
        </div>

        {/* Bottom Verification & Identity Footer */}
        <div className="px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs font-mono z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Vishwajith P</span>
          </div>
          <span className="text-[11px] text-cyan-300 font-medium">AIML Student</span>
        </div>

      </div>
    </div>
  );
};

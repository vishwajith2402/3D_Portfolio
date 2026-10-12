import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFade(true);
            setTimeout(onFinish, 400);
          }, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] text-white transition-opacity duration-400 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Neural Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping opacity-30" />
          <div className="absolute inset-0 rounded-full border-2 border-t-cyan-400 border-r-purple-600 border-b-transparent border-l-transparent animate-spin" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-900/60 to-cyan-900/40 border border-purple-500/40 flex items-center justify-center backdrop-blur-md">
            <span className="font-mono text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              VP
            </span>
          </div>
        </div>

        {/* Text and status */}
        <div className="text-center">
          <h2 className="text-sm font-mono tracking-widest uppercase text-slate-400 mb-2">
            Initializing Neural System
          </h2>
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-mono text-cyan-400/80">
            {progress}% Loaded
          </p>
        </div>
      </div>
    </div>
  );
};

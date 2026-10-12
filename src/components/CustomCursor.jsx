import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animationFrame;
    const updateTrail = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(updateTrail);
    };
    animationFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          backgroundColor: '#22D3EE',
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          boxShadow: '0 0 10px #22D3EE, 0 0 20px #6D28D9',
        }}
      />
      {/* Outer subtle glow ring */}
      <div
        className="fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out border"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isPointer ? '44px' : '32px',
          height: isPointer ? '44px' : '32px',
          borderColor: isPointer ? '#22D3EE' : 'rgba(109, 40, 217, 0.4)',
          backgroundColor: isPointer ? 'rgba(34, 211, 238, 0.08)' : 'rgba(109, 40, 217, 0.04)',
          transform: 'translate(-50%, -50%)',
          backdropFilter: 'blur(1px)',
        }}
      />
    </>
  );
};

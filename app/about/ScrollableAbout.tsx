'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

const SECTIONS = [
  { id: 'me', label: 'Me' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function InteractiveViewer({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('me');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const sectionElements = container.querySelectorAll('[data-section]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Scroll Snap Box */}
      <div
        ref={containerRef}
        className="
          w-[600px] h-[360px] bg-[#29221d] rounded-2xl p-8
          overflow-y-auto snap-y snap-mandatory scroll-smooth
          border border-amber-900/30
          /* 1. HIDE SCROLLBAR */
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          /* 2. FADE TOP & BOTTOM EDGES */
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]
        "
      >
        {/* 3. BIGGER GAPS BETWEEN SECTIONS */}
        <div className="flex flex-col gap-28 py-16">
          {children}
        </div>
      </div>

      {/* Navigation Linebar */}
      <div className="relative flex items-center gap-12 mt-8">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-amber-900/50 -translate-y-1/2 -z-0" />
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <span
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 scale-125 ring-4 ring-amber-500/20'
                    : 'bg-amber-900/80 group-hover:bg-amber-600'
                }`}
              />
              <span
                className={`text-xs mt-2 transition-colors ${
                  isActive ? 'text-amber-500 font-bold' : 'text-amber-200/50'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
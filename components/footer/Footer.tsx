'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 sm:px-8 max-w-7xl mx-auto z-10 text-xs font-mono text-[#929292]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[#F5F2ED] font-semibold">RAHEEL WAHLA</span>
          <span className="mx-2 text-white/20">·</span>
          <span>FULL STACK WEB DEVELOPER & DIGITAL CREATIVE</span>
        </div>

        <div className="flex items-center gap-6">
          <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#F5F2ED] hover:text-[#D98245] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D98245]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Top Editorial Kicker */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase text-[#929292] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#D98245]">PORTFOLIO 2026</span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>VOLUME 01</span>
        </div>
        <div className="flex items-center gap-2">
          <span>GLOBAL REMOTE</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="text-[#F5F2ED]">OPEN FOR SELECT COMMISSIONS</span>
        </div>
      </div>

      {/* Main Center Hero Block */}
      <div className="my-auto py-12 max-w-4xl">
        {/* Professional Subtitle */}
        <p className="text-sm sm:text-base tracking-[0.2em] uppercase font-mono text-[#D98245] mb-4">
          FULL STACK WEB DEVELOPER & DIGITAL CREATIVE
        </p>

        {/* Monumental Editorial Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.88] text-[#F5F2ED] mb-8 font-display">
          RAHEEL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F2ED] via-[#D98245] to-[#C99A68]">
            WAHLA.
          </span>
        </h1>

        {/* Narrative Lead Prose */}
        <p className="text-base sm:text-lg md:text-xl text-[#929292] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Engineering high-performance web applications and cinematic digital experiences where creative direction meets resilient, modern full-stack architecture.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#D98245] hover:bg-[#c47239] text-black font-semibold text-xs tracking-widest uppercase rounded-md transition-all shadow-lg shadow-[#D98245]/20"
          >
            <span>EXPLORE MY WORK</span>
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#111111] hover:bg-[#1a1a1a] text-[#F5F2ED] hover:text-[#D98245] border border-white/10 hover:border-[#D98245]/40 font-medium text-xs tracking-widest uppercase rounded-md transition-all"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom Status & Editorial Indicator Strip */}
      <div className="pt-8 border-t border-white/10 flex flex-wrap items-end justify-between gap-6 text-xs text-[#929292]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 font-mono">
          <div>
            <div className="text-[11px] text-[#929292] uppercase">Focus</div>
            <div className="text-[#F5F2ED] text-sm mt-0.5">Full Stack & 3D Web</div>
          </div>
          <div>
            <div className="text-[11px] text-[#929292] uppercase">Core Core</div>
            <div className="text-[#F5F2ED] text-sm mt-0.5">React · Next.js · Node</div>
          </div>
          <div className="hidden sm:block">
            <div className="text-[11px] text-[#929292] uppercase">Philosophy</div>
            <div className="text-[#F5F2ED] text-sm mt-0.5">Cinematic & Resilient</div>
          </div>
        </div>

        {/* Scroll prompt */}
        <a
          href="#about"
          className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#929292] hover:text-[#D98245] transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1 text-[#D98245]" />
        </a>
      </div>
    </section>
  );
}

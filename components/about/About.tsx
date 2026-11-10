'use client';

import React from 'react';
import { Layers, Terminal, Sparkles, Cpu } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Architectural Engineering',
      desc: 'Crafting robust full stack foundations with TypeScript, modern Next.js paradigms, clean REST & GraphQL APIs, and scalable MongoDB schemas designed for resilient data flows.',
      icon: Terminal,
    },
    {
      num: '02',
      title: 'Cinematic Visual Craft',
      desc: 'Merging physics-informed Three.js web graphics with high-fidelity typography, fluid motion systems, and meticulous lighting to create unforgettable digital destinations.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Performance Obsession',
      desc: 'Delivering silky 60fps animations, sub-second TTFB, optimized asset compression, and software-safe WebGL fallback pipelines that feel effortless on any device.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Digital Experience Design',
      desc: 'Obsessing over micro-interactions, ergonomic spatial layouts, intuitive information hierarchy, and accessibility to make complex software feel delightfully natural.',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Editorial Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98245] mb-3">
          <span>CHAPTER 01</span>
          <span aria-hidden="true">·</span>
          <span>PHILOSOPHY</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2ED] font-display">
          BEHIND THE CODE.
        </h2>
      </div>

      {/* Main Narrative Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        {/* Left Column: Big Editorial Statement */}
        <div className="lg:col-span-5">
          <p className="text-2xl sm:text-3xl font-light leading-snug text-[#F5F2ED] font-display">
            Code is more than logical syntax—it is the digital material through which unforgettable experiences are sculpted.
          </p>
          <div className="mt-8 pt-8 border-t border-white/10 text-sm font-mono text-[#929292] space-y-2">
            <div className="flex justify-between">
              <span>Stack Spectrum</span>
              <span className="text-[#F5F2ED]">Frontend to Cloud Infrastructure</span>
            </div>
            <div className="flex justify-between">
              <span>Aesthetic Standard</span>
              <span className="text-[#F5F2ED]">Minimalist · Cinematic · High-Precision</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Body */}
        <div className="lg:col-span-7 space-y-6 text-[#929292] text-base sm:text-lg leading-relaxed font-light">
          <p>
            As a full-stack web developer and digital creative, I work at the intersection of rigorous software architecture and expressive visual artistry. I believe modern web experiences should never force a trade-off between uncompromising performance and visceral aesthetic impact.
          </p>
          <p>
            Whether building distributed Node.js/Express server architectures, orchestrating reactive state with React and Next.js, or choreographing interactive real-time 3D canvas environments with Three.js, my methodology revolves around intentionality—every line of code and every micro-interaction serves a clear, measurable purpose.
          </p>
          <p>
            By synthesizing clean design principles with modular engineering standards, I transform intricate product visions into refined, production-grade applications that resonate with users and elevate digital presence.
          </p>
        </div>
      </div>

      {/* 4 Architectural Pillars Grid (Clean hairline borders, no thick left borders, no pills) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.num}
              className="p-8 bg-[#111111]/60 backdrop-blur-sm border border-white/10 hover:border-[#D98245]/40 transition-all duration-300 rounded-xl group relative overflow-hidden"
            >
              {/* Subtle top copper glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D98245] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-[#D98245]">{pillar.num}</span>
                <Icon className="w-5 h-5 text-[#929292] group-hover:text-[#D98245] transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[#F5F2ED] mb-3 font-display">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#929292] leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

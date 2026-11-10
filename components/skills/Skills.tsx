'use client';

import React, { useState } from 'react';
import {
  Code,
  Globe,
  FileCode,
  Layers,
  Server,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Palette,
  ExternalLink,
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'workflow';
  role: string;
  focus: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export default function Skills() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'workflow'>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills: SkillItem[] = [
    {
      name: 'HTML5',
      category: 'frontend',
      role: 'Semantic Structure & Web Standards',
      focus: ['Semantic markup', 'WCAG accessibility', 'SEO architecture', 'Modern DOM APIs'],
      icon: Globe,
    },
    {
      name: 'CSS3',
      category: 'frontend',
      role: 'Modern Layouts & Spatial Design',
      focus: ['CSS Grid & Flexbox', 'Custom properties', 'Keyframe animations', 'Fluid typography'],
      icon: Palette,
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      role: 'Core Language Engine',
      focus: ['ESNext syntax', 'Asynchronous workflows', 'Event loop semantics', 'Functional patterns'],
      icon: Code,
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      role: 'Type-Safe Architecture',
      focus: ['Strict static typing', 'Generics & utility types', 'API contract interfaces', 'Compiler setup'],
      icon: FileCode,
    },
    {
      name: 'React.js',
      category: 'frontend',
      role: 'Reactive Component Systems',
      focus: ['Custom hooks', 'Component composition', 'Concurrent rendering', 'State management'],
      icon: Layers,
    },
    {
      name: 'Next.js',
      category: 'frontend',
      role: 'Full Stack React Framework',
      focus: ['App Router & SSR', 'Server Actions', 'Route Handlers', 'Edge optimization'],
      icon: Cpu,
    },
    {
      name: 'Node.js',
      category: 'backend',
      role: 'Server Runtime & Services',
      focus: ['Event-driven I/O', 'REST architecture', 'Streams & buffers', 'Microservices'],
      icon: Server,
    },
    {
      name: 'Express.js',
      category: 'backend',
      role: 'Backend API Framework',
      focus: ['Middleware chaining', 'Router modularization', 'Authentication protocols', 'Error handling'],
      icon: Terminal,
    },
    {
      name: 'MongoDB',
      category: 'backend',
      role: 'NoSQL Document Database',
      focus: ['Aggregation pipelines', 'Schema validation', 'Indexing strategies', 'Data modeling'],
      icon: Database,
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      role: 'Utility-First Design System',
      focus: ['Tailwind v4 integration', 'Design tokens', 'Responsive breakpoints', 'Dark mode styling'],
      icon: Palette,
    },
    {
      name: 'Git',
      category: 'workflow',
      role: 'Version Control & History',
      focus: ['Branching strategies', 'Rebase & merge workflows', 'Atomic commit hygiene', 'Conflict resolution'],
      icon: GitBranch,
    },
    {
      name: 'GitHub',
      category: 'workflow',
      role: 'Collaboration & CI/CD Ecosystem',
      focus: ['GitHub Actions', 'Code reviews & PRs', 'Issue tracking', 'Release management'],
      icon: ExternalLink,
    },
  ];

  const filteredSkills =
    filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header with Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98245] mb-3">
            <span>CHAPTER 02</span>
            <span aria-hidden="true">·</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2ED] font-display">
            TECHNICAL EXPERTISE.
          </h2>
        </div>

        {/* Filter Tabs (Interactive Segmented Control as approved by frontend-design guidelines) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-[#D98245] text-black font-semibold shadow-sm'
                : 'text-[#929292] hover:text-[#F5F2ED]'
            }`}
          >
            All Stack ({skills.length})
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
              filter === 'frontend'
                ? 'bg-[#D98245] text-black font-semibold shadow-sm'
                : 'text-[#929292] hover:text-[#F5F2ED]'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
              filter === 'backend'
                ? 'bg-[#D98245] text-black font-semibold shadow-sm'
                : 'text-[#929292] hover:text-[#F5F2ED]'
            }`}
          >
            Backend & DB
          </button>
          <button
            onClick={() => setFilter('workflow')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
              filter === 'workflow'
                ? 'bg-[#D98245] text-black font-semibold shadow-sm'
                : 'text-[#929292] hover:text-[#F5F2ED]'
            }`}
          >
            Workflow & Git
          </button>
        </div>
      </div>

      {/* Grid of 12 Technologies (Responsive 1/2/3/4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((tech) => {
          const Icon = tech.icon;
          const isSelected = selectedSkill === tech.name;
          return (
            <div
              key={tech.name}
              onClick={() => setSelectedSkill(isSelected ? null : tech.name)}
              className={`p-6 bg-[#111111]/70 backdrop-blur-sm border transition-all duration-300 rounded-xl cursor-pointer group relative overflow-hidden ${
                isSelected
                  ? 'border-[#D98245] bg-[#1a1410]/80 shadow-lg shadow-[#D98245]/15'
                  : 'border-white/10 hover:border-[#D98245]/40 hover:bg-[#141414]'
              }`}
            >
              {/* Header: Icon & Category Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D98245] group-hover:scale-105 group-hover:border-[#D98245]/40 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#929292] group-hover:text-[#D98245] transition-colors">
                  {tech.category}
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="text-xl font-bold text-[#F5F2ED] mb-1 font-display group-hover:text-[#F5F2ED]">
                {tech.name}
              </h3>
              <p className="text-xs text-[#929292] mb-4 font-light">
                {tech.role}
              </p>

              {/* Unboxed Metadata with · separators (No pills as enforced by frontend-design guidelines) */}
              <div className="pt-3 border-t border-white/10 text-xs text-[#929292] leading-relaxed">
                {tech.focus.map((item, idx) => (
                  <span key={item}>
                    <span className="hover:text-[#F5F2ED] transition-colors">{item}</span>
                    {idx < tech.focus.length - 1 && (
                      <span aria-hidden="true" className="mx-1.5 text-white/20">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

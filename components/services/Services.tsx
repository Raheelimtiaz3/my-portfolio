'use client';

import React from 'react';
import {
  Layers,
  Code2,
  Server,
  Smartphone,
  Sparkles,
  Zap,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 'full-stack',
      number: '01',
      title: 'Full Stack Development',
      tagline: 'End-to-End Modern Web Applications',
      description:
        'Architecting complete, scalable web solutions connecting performant Next.js frontends with robust Node.js/Express server backends and optimized MongoDB databases.',
      deliverables: [
        'Modular system architecture',
        'TypeScript end-to-end type safety',
        'Authentication & session security',
        'Production deployment & monitoring',
      ],
      icon: Layers,
    },
    {
      id: 'frontend',
      number: '02',
      title: 'Frontend Development',
      tagline: 'Reactive, Fluid User Interfaces',
      description:
        'Transforming complex interface states into seamless, intuitive React experiences with smooth component lifecycles, atomic design principles, and custom hooks.',
      deliverables: [
        'React 19 & Next.js App Router',
        'Tailwind CSS design systems',
        'Complex state management',
        'Accessible, semantic DOM hierarchy',
      ],
      icon: Code2,
    },
    {
      id: 'backend',
      number: '03',
      title: 'Backend Development',
      tagline: 'Resilient APIs & Cloud Services',
      description:
        'Developing high-throughput REST and GraphQL APIs, event-driven microservices, real-time WebSockets, and secure database aggregation pipelines.',
      deliverables: [
        'Node.js & Express API servers',
        'MongoDB schema modeling & indexing',
        'JWT & role-based access control',
        'Third-party webhooks & integrations',
      ],
      icon: Server,
    },
    {
      id: 'responsive',
      number: '04',
      title: 'Responsive Web Design',
      tagline: 'Adaptive Layouts Across Every Viewport',
      description:
        'Crafting intentional layouts that look and feel tailored across ultra-wide desktop monitors, standard laptops, tablets, and mobile smartphones without awkward breakpoints.',
      deliverables: [
        'Fluid typography & spatial scales',
        'Mobile-first touch target ergonomics',
        'Cross-browser rendering fidelity',
        'Retina display asset calibration',
      ],
      icon: Smartphone,
    },
    {
      id: 'ui-ux',
      number: '05',
      title: 'UI/UX Implementation',
      tagline: 'Pixel-Precise Digital Craft',
      description:
        'Bringing Figma prototypes to life with unmatched fidelity, paying meticulous attention to kerning, micro-interactions, smooth easing curves, and tactile feedback.',
      deliverables: [
        'Interactive 3D WebGL accents',
        'Micro-interactions & tactile states',
        'WCAG AA contrast accessibility',
        'Interactive prototypes into code',
      ],
      icon: Sparkles,
    },
    {
      id: 'optimization',
      number: '06',
      title: 'Website Optimization',
      tagline: 'Speed, SEO & Core Web Vitals',
      description:
        'Auditing and tuning every aspect of client delivery: tree-shaking bundles, reducing TTFB, eliminating layout shifts, and engineering 60 FPS rendering loops.',
      deliverables: [
        'Core Web Vitals 95+ score targets',
        'Asset compression & lazy loading',
        'Software WebGL GPU fallbacks',
        'Structured schema data & technical SEO',
      ],
      icon: Zap,
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98245] mb-3">
            <span>CHAPTER 04</span>
            <span aria-hidden="true">·</span>
            <span>EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2ED] font-display">
            SERVICES.
          </h2>
        </div>
        <p className="text-sm font-mono text-[#929292] max-w-sm">
          Specialized engineering and creative disciplines tailored for startups, agencies, and forward-thinking enterprises.
        </p>
      </div>

      {/* Six Premium Service Cards (3x2 Grid Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="p-8 bg-[#111111]/70 backdrop-blur-sm border border-white/10 hover:border-[#D98245]/50 transition-all duration-300 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top copper border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D98245] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono tracking-widest text-[#D98245] font-bold">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#929292] group-hover:text-[#D98245] group-hover:border-[#D98245]/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Subtitle & Title */}
                <p className="text-xs font-mono uppercase tracking-wider text-[#929292] mb-1.5">
                  {service.tagline}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2ED] mb-4 font-display group-hover:text-[#F5F2ED]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#929292] font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables unboxed list */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#929292] mb-3">
                  Key Deliverables
                </div>
                <ul className="space-y-1.5 text-xs text-[#F5F2ED]/80 font-mono">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D98245]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Inquire link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D98245] hover:text-[#F5F2ED] transition-colors"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

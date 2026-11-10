'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight, X, Sparkles, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  role: string;
  isLiveProduction?: boolean;
  highlights: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'wahla-exchange',
      title: 'Wahla Exchange',
      subtitle: 'UK Financial Services & Currency Remittance Platform',
      description:
        'Official digital platform for Wahla Exchange Ltd (Glasgow, Scotland). Provides live British Pound (GBP) exchange rates, international money transfer services, bureau de change rates, and compliant payment institution workflows.',
      image: '/images/project_wahla_exchange_1794309105523.jpg',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://wahlaexchange.co.uk',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Lead Full Stack Engineer & Web Architect',
      isLiveProduction: true,
      highlights: [
        'Live foreign exchange rate ticker with automated GBP currency pair feeds',
        'Interactive remittance calculator with real-time fee and payout calculations',
        'FCA PSD regulated agent compliance architecture & recipient management',
        'Mobile-responsive layout engineered for high security and seamless client onboarding',
      ],
    },
    {
      id: 'fab-traders',
      title: 'FAB Traders Ltd',
      subtitle: 'Consumer Tech & Electronics E-Commerce Retailer',
      description:
        'High-performance commercial e-commerce web platform for FAB Traders Ltd (UK). Specializing in consumer electronics, refurbished smartphones, Apple accessories, and tech hardware with fast catalog search and checkout.',
      image: '/images/project_fab_traders_1794309105242.jpg',
      stack: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://fabtradersltd.com/',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Full Stack E-Commerce Developer',
      isLiveProduction: true,
      highlights: [
        'Instant multi-faceted product catalog filtering across tech accessories & devices',
        'Sub-second First Contentful Paint with Next.js image and asset optimization',
        'High-converting cart flow with UK payment gateway integration and rapid dispatch tracking',
        'Dynamic inventory syncing and responsive mobile shopping experience',
      ],
    },
    {
      id: 'studio-noir',
      title: 'Studio Noir',
      subtitle: '3D Luxury Agency & WebGL Experience',
      description:
        'A bespoke digital agency experience featuring procedural Three.js metallic sculptures, custom GLSL lighting shaders, smooth virtual scrolling, and headless CMS integration.',
      image: '/images/project_cinema_studio_1794308240062.jpg',
      stack: ['Next.js', 'React.js', 'Three.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://fabtradersltd.com/',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Creative Developer & Frontend Architect',
      isLiveProduction: false,
      highlights: [
        'Zero-dependency procedural studio environment reflections',
        'Custom PBR shaders with frame-rate independent physics damping',
        'Sub-second first contentful paint with optimized WebGL lifecycle',
      ],
    },
    {
      id: 'tradeforce',
      title: 'TradeForce Quant Terminal',
      subtitle: 'High-Frequency Financial Telemetry Suite',
      description:
        'Institutional cryptocurrency and equity trading terminal delivering streaming tick data, interactive multivariable candlestick analysis, and real-time risk simulation.',
      image: '/images/project_crypto_analytics_1794308241872.jpg',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://wahlaexchange.co.uk',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Full Stack Systems Engineer',
      isLiveProduction: false,
      highlights: [
        'WebSocket microservice streaming 1,200+ tick updates/second',
        'Optimized MongoDB time-series aggregation pipeline',
        'Low-latency canvas charting with zero garbage collection allocations',
      ],
    },
    {
      id: 'axon-ai',
      title: 'Axon AI Spatial Canvas',
      subtitle: 'Multidimensional AI Knowledge Platform',
      description:
        'An experimental spatial workspace for visualizing neural graph embeddings, interconnected semantic relationships, and real-time generative intelligence vectors in 3D.',
      image: '/images/project_spatial_ai_1794308242303.jpg',
      stack: ['Next.js', 'TypeScript', 'Three.js', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://wahlaexchange.co.uk',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Full Stack & 3D Engineer',
      isLiveProduction: false,
      highlights: [
        'Interactive 3D force-directed node graph layout engine',
        'Integrated Gemini API server-side embeddings pipeline',
        'Raycasting inspection system with instantaneous detail modals',
      ],
    },
    {
      id: 'nexus-cloud',
      title: 'Nexus Cloud Infrastructure',
      subtitle: 'Distributed Edge Telemetry & Node Orchestration',
      description:
        'Centralized cloud telemetry platform visualizing global distributed server nodes, latency heatmaps, health status metrics, and automated deployment pipelines.',
      image: '/images/project_cloud_engine_1794308242097.jpg',
      stack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript'],
      liveUrl: 'https://fabtradersltd.com/',
      githubUrl: 'https://github.com/raheelwahla',
      role: 'Backend & Infrastructure Lead',
      isLiveProduction: false,
      highlights: [
        'Distributed health-check daemon reporting node metrics every 3s',
        'Role-based access control and JWT bearer token authorization',
        'Interactive geographical node topology map with live statuses',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98245] mb-3">
            <span>CHAPTER 03</span>
            <span aria-hidden="true">·</span>
            <span>SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2ED] font-display">
            SELECTED PROJECTS.
          </h2>
        </div>
        <p className="text-sm font-mono text-[#929292] max-w-sm">
          Featuring live production platforms for commercial enterprises alongside advanced interactive web experiments.
        </p>
      </div>

      {/* Editorial Bento Grid (2 Columns Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[#111111]/70 backdrop-blur-sm border border-white/10 hover:border-[#D98245]/50 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Project Image Preview Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Top Markers Row */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/15 rounded-md text-[11px] font-mono tracking-widest text-[#F5F2ED]">
                  0{idx + 1}
                </span>
                {project.isLiveProduction && (
                  <span className="px-3 py-1 bg-[#D98245]/20 backdrop-blur-md border border-[#D98245]/40 rounded-md text-[11px] font-mono tracking-wider uppercase text-[#D98245] flex items-center gap-1.5 font-medium">
                    <Globe className="w-3 h-3" />
                    <span>Live Production</span>
                  </span>
                )}
              </div>

              {/* Top Right Direct Live Link Action */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F5F2ED] hover:bg-[#D98245] hover:text-black hover:border-[#D98245] transition-all"
                title={`Visit ${project.title} live`}
                aria-label={`Visit ${project.title} live website`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Content Details */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#D98245] mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] mb-3 font-display group-hover:text-[#D98245] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#929292] font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Unboxed Metadata with · separators */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-1 text-xs font-mono text-[#929292]">
                  {project.stack.map((item, sIdx) => (
                    <span key={item}>
                      <span className="text-[#F5F2ED]/90">{item}</span>
                      {sIdx < project.stack.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-white/20">·</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* External links row with Live Button */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-[#929292] group-hover:text-[#F5F2ED] transition-colors">
                    Click to view technical case details →
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#D98245]/15 hover:bg-[#D98245] text-[#D98245] hover:text-black border border-[#D98245]/30 text-xs font-mono uppercase tracking-wider transition-all"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#D98245] hover:text-black text-white/80 transition-colors border border-white/15"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Header */}
            <div className="relative aspect-[16/9] w-full max-h-72 overflow-hidden bg-black shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

              {selectedProject.isLiveProduction && (
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md border border-[#D98245]/50 rounded-md text-xs font-mono tracking-wider uppercase text-[#D98245] font-semibold flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Production Platform</span>
                  </span>
                </div>
              )}
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#D98245] mb-1">
                    {selectedProject.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold text-[#F5F2ED] font-display">
                    {selectedProject.title}
                  </h3>
                </div>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D98245] hover:bg-[#c47239] text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-md transition-all shadow-lg shadow-[#D98245]/20 shrink-0"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-base text-[#929292] font-light leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Engineering Highlights */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#F5F2ED] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D98245]" />
                  <span>Technical & Architectural Highlights</span>
                </div>
                <ul className="space-y-2 text-sm text-[#929292] font-light">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D98245] mt-1 font-mono">―</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-4 border-t border-white/10">
                <div>
                  <div className="text-[#929292] uppercase mb-1">Role & Discipline</div>
                  <div className="text-[#F5F2ED] text-sm">{selectedProject.role}</div>
                </div>
                <div>
                  <div className="text-[#929292] uppercase mb-1">Technologies Used</div>
                  <div className="text-[#F5F2ED] text-sm">{selectedProject.stack.join(' · ')}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D98245] hover:bg-[#c47239] text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit {selectedProject.liveUrl.replace('https://', '')}</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#F5F2ED] text-xs font-mono uppercase tracking-wider rounded-md transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#929292] hover:text-[#F5F2ED] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

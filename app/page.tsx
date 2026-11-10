'use client';

import React, { useState, useEffect } from 'react';
import Scene3D from '@/components/canvas/Scene3D';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ZenControls from '@/components/ui/ZenControls';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [materialPreset, setMaterialPreset] = useState<'copper' | 'chrome' | 'gold'>('copper');
  const [wireframe, setWireframe] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [zenMode, setZenMode] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const top = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? Math.min(1, Math.max(0, top / maxScroll)) : 0;
          setScrollProgress(progress);

          // Active section determination
          const sections = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
          const offsets = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return { id, top: 0 };
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top };
          });

          // Find section closest to top (with offset)
          for (let i = offsets.length - 1; i >= 0; i--) {
            if (offsets[i].top <= window.innerHeight * 0.45) {
              setActiveSection(offsets[i].id);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#080808] text-[#F5F2ED] selection:bg-[#D98245]/30 selection:text-[#F5F2ED]">
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Persistent 3D Three.js Canvas Scene */}
      <Scene3D
        scrollProgress={scrollProgress}
        materialPreset={materialPreset}
        wireframe={wireframe}
        rotationSpeedMultiplier={rotationSpeed}
      />

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Content wrapper with Zen Mode transition */}
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          zenMode ? 'opacity-5 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>

      {/* Collapsible 3D Engine Dock */}
      <ZenControls
        materialPreset={materialPreset}
        onMaterialChange={setMaterialPreset}
        wireframe={wireframe}
        onWireframeChange={setWireframe}
        rotationSpeed={rotationSpeed}
        onRotationSpeedChange={setRotationSpeed}
        zenMode={zenMode}
        onZenModeToggle={() => setZenMode(!zenMode)}
      />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Sliders, Box, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface ZenControlsProps {
  materialPreset: 'copper' | 'chrome' | 'gold';
  onMaterialChange: (preset: 'copper' | 'chrome' | 'gold') => void;
  wireframe: boolean;
  onWireframeChange: (wf: boolean) => void;
  rotationSpeed: number;
  onRotationSpeedChange: (speed: number) => void;
  zenMode: boolean;
  onZenModeToggle: () => void;
}

export default function ZenControls({
  materialPreset,
  onMaterialChange,
  wireframe,
  onWireframeChange,
  rotationSpeed,
  onRotationSpeedChange,
  zenMode,
  onZenModeToggle,
}: ZenControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] w-auto">
      {/* Drawer Toggle Header Pill */}
      <div className="flex justify-center mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-[#929292] hover:text-[#F5F2ED] bg-[#111111]/80 hover:bg-[#111111] border border-white/10 rounded-full transition-all duration-200"
          title={isExpanded ? 'Collapse 3D Controls' : 'Expand 3D Controls'}
        >
          <Sliders className="w-3 h-3 text-[#D98245]" />
          <span>{isExpanded ? 'Hide 3D Engine' : '3D Engine Controls'}</span>
          {isExpanded ? (
            <ChevronDown className="w-3 h-3 text-[#929292]" />
          ) : (
            <ChevronUp className="w-3 h-3 text-[#929292]" />
          )}
        </button>
      </div>

      {/* Expanded Controls Card */}
      {isExpanded && (
        <div className="p-3 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex flex-wrap items-center gap-4 text-xs text-[#F5F2ED]">
          {/* Material finish selection */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#929292] font-mono uppercase mr-1">Finish:</span>
            <button
              onClick={() => onMaterialChange('copper')}
              className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                materialPreset === 'copper'
                  ? 'bg-[#D98245]/20 text-[#D98245] border border-[#D98245]/40 font-medium'
                  : 'bg-white/5 text-[#929292] hover:text-[#F5F2ED] border border-transparent'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#D98245]" />
              Copper
            </button>
            <button
              onClick={() => onMaterialChange('chrome')}
              className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                materialPreset === 'chrome'
                  ? 'bg-white/20 text-[#F5F2ED] border border-white/30 font-medium'
                  : 'bg-white/5 text-[#929292] hover:text-[#F5F2ED] border border-transparent'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#F5F2ED]" />
              Chrome
            </button>
            <button
              onClick={() => onMaterialChange('gold')}
              className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                materialPreset === 'gold'
                  ? 'bg-[#C99A68]/20 text-[#C99A68] border border-[#C99A68]/40 font-medium'
                  : 'bg-white/5 text-[#929292] hover:text-[#F5F2ED] border border-transparent'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C99A68]" />
              Gold
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Wireframe Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onWireframeChange(!wireframe)}
              className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                wireframe
                  ? 'bg-[#D98245]/20 text-[#D98245] border border-[#D98245]/40'
                  : 'bg-white/5 text-[#929292] hover:text-[#F5F2ED] border border-transparent'
              }`}
            >
              <Box className="w-3 h-3" />
              <span>{wireframe ? 'Mesh: Wire' : 'Mesh: Solid'}</span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Speed Multiplier */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#929292] font-mono">Speed:</span>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={rotationSpeed}
              onChange={(e) => onRotationSpeedChange(parseFloat(e.target.value))}
              className="w-16 accent-[#D98245] cursor-pointer"
            />
            <span className="text-[11px] font-mono tabular-nums text-[#929292]">
              {rotationSpeed.toFixed(1)}x
            </span>
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Zen Viewport Mode (hide text content temporarily to admire 3D) */}
          <button
            onClick={onZenModeToggle}
            className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
              zenMode
                ? 'bg-[#D98245] text-black font-semibold'
                : 'bg-white/5 text-[#929292] hover:text-[#F5F2ED]'
            }`}
            title="Inspect pure 3D canvas"
          >
            {zenMode ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            <span>{zenMode ? 'Exit Zen Mode' : 'Zen View'}</span>
          </button>
        </div>
      )}
    </div>
  );
}

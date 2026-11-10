'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface Scene3DProps {
  scrollProgress: number; // 0 to 1
  materialPreset: 'copper' | 'chrome' | 'gold';
  wireframe: boolean;
  rotationSpeedMultiplier: number;
}

export default function Scene3D({
  scrollProgress,
  materialPreset,
  wireframe,
  rotationSpeedMultiplier,
}: Scene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    scrollProgress: 0,
    materialPreset: 'copper' as 'copper' | 'chrome' | 'gold',
    wireframe: false,
    speedMult: 1,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  // Keep stateRef in sync with props without tearing down canvas
  useEffect(() => {
    stateRef.current.scrollProgress = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    stateRef.current.materialPreset = materialPreset;
  }, [materialPreset]);

  useEffect(() => {
    stateRef.current.wireframe = wireframe;
  }, [wireframe]);

  useEffect(() => {
    stateRef.current.speedMult = rotationSpeedMultiplier;
  }, [rotationSpeedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL for performance calibration
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // PMREM Environment Map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    pmremGenerator.dispose();

    // Lighting: Cinematic 3-point warm/cool studio rig
    const keyLight = new THREE.DirectionalLight(0xd98245, 3.5); // Warm copper key
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc99a68, 2.0); // Warm gold fill
    fillLight.position.set(-6, -2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.5); // Cool rim highlight
    rimLight.position.set(0, 8, -5);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0x1a1a1a, 0x080808, 1.2);
    scene.add(hemiLight);

    // Root 3D Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Materials definition
    const getMaterialConfig = (preset: 'copper' | 'chrome' | 'gold') => {
      switch (preset) {
        case 'copper':
          return {
            color: new THREE.Color(0xd98245),
            metalness: 0.95,
            roughness: 0.18,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
          };
        case 'gold':
          return {
            color: new THREE.Color(0xc99a68),
            metalness: 0.92,
            roughness: 0.22,
            clearcoat: 0.7,
            clearcoatRoughness: 0.15,
          };
        case 'chrome':
        default:
          return {
            color: new THREE.Color(0xf0f0f5),
            metalness: 0.98,
            roughness: 0.12,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
          };
      }
    };

    const initialMatConfig = getMaterialConfig(stateRef.current.materialPreset);

    // 1. Central Core: Multi-faceted reflective chrome/copper sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.15, 4);
    const coreMat = new THREE.MeshPhysicalMaterial({
      ...initialMatConfig,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 2. Inner Lattice Armature: Geodesic wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.32, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd98245,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    sculptureGroup.add(wireMesh);

    // 3. Ring Group 1 (Outer Gyroscope Ring)
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.045, 16, 120);
    const ring1Mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd98245),
      metalness: 0.96,
      roughness: 0.15,
      clearcoat: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.3;
    sculptureGroup.add(ring1);

    // 4. Ring Group 2 (Middle Gyroscope Ring)
    const ring2Geo = new THREE.TorusGeometry(1.75, 0.038, 16, 100);
    const ring2Mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xc99a68),
      metalness: 0.94,
      roughness: 0.18,
      clearcoat: 0.85,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI * 0.45;
    sculptureGroup.add(ring2);

    // 5. Ring Group 3 (Inner Gyroscope Ring)
    const ring3Geo = new THREE.TorusGeometry(1.48, 0.032, 16, 90);
    const ring3Mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf5f2ed),
      metalness: 0.98,
      roughness: 0.1,
      clearcoat: 1.0,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI * 0.25;
    sculptureGroup.add(ring3);

    // 6. Orbital Satellite Nodes
    const satelliteGroup = new THREE.Group();
    sculptureGroup.add(satelliteGroup);
    const satellites: THREE.Mesh[] = [];
    const satCount = 6;
    const satGeo = new THREE.OctahedronGeometry(0.12, 0);

    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.4 + (i % 2) * 0.35;
      const satMat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0xd98245 : 0xc99a68,
        metalness: 0.95,
        roughness: 0.2,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.5) * 0.6, Math.sin(angle) * radius);
      satellites.push(sat);
      satelliteGroup.add(sat);
    }

    // 7. Ambient Particle Field
    const particleCount = isSoftwareGl ? 80 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd98245,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      stateRef.current.targetMouseX = x * 0.8;
      stateRef.current.targetMouseY = y * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render loop state
    let frameId = 0;
    let clockTime = 0;
    let lastTime = performance.now();

    // Pre-allocated math objects (Zero GC)
    const _targetPos = new THREE.Vector3();
    const _targetRot = new THREE.Euler();
    let currentMatPreset = stateRef.current.materialPreset;

    const render = () => {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const state = stateRef.current;
      const speed = state.speedMult;
      clockTime += delta * speed;

      // Smooth mouse damping
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.05;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.05;

      // Update materials if preset changed
      if (currentMatPreset !== state.materialPreset) {
        currentMatPreset = state.materialPreset;
        const cfg = getMaterialConfig(state.materialPreset);
        coreMat.color.copy(cfg.color);
        coreMat.metalness = cfg.metalness;
        coreMat.roughness = cfg.roughness;
        coreMat.clearcoat = cfg.clearcoat;
      }

      coreMat.wireframe = state.wireframe;
      ring1Mat.wireframe = state.wireframe;
      ring2Mat.wireframe = state.wireframe;
      ring3Mat.wireframe = state.wireframe;

      // Continuous autonomous rotation
      coreMesh.rotation.y = clockTime * 0.25;
      coreMesh.rotation.x = Math.sin(clockTime * 0.15) * 0.2;
      wireMesh.rotation.y = -clockTime * 0.18;
      wireMesh.rotation.z = clockTime * 0.12;

      ring1.rotation.x += delta * 0.45 * speed;
      ring1.rotation.y += delta * 0.3 * speed;

      ring2.rotation.y += delta * 0.55 * speed;
      ring2.rotation.z += delta * 0.25 * speed;

      ring3.rotation.z += delta * 0.65 * speed;
      ring3.rotation.x += delta * 0.35 * speed;

      satelliteGroup.rotation.y = clockTime * 0.35;
      satellites.forEach((sat, i) => {
        sat.rotation.x += delta * (0.8 + i * 0.2) * speed;
        sat.rotation.y += delta * (0.5 + i * 0.1) * speed;
      });

      // Ambient particle slow drift
      particles.rotation.y = clockTime * 0.03;
      particles.rotation.x = Math.sin(clockTime * 0.02) * 0.05;

      // Responsive positioning based on scroll progress (0 to 1)
      const p = Math.max(0, Math.min(1, state.scrollProgress));

      // Calculate target sculpture translation and camera based on scroll progress
      // Hero (p: 0 - 0.18): Top right / center-right majestic focal anchor
      // About (p: 0.18 - 0.38): Glides left, expands slightly
      // Skills (p: 0.38 - 0.58): Glides right/center, tilts down
      // Projects (p: 0.58 - 0.78): Drifts into deep background
      // Services (p: 0.78 - 0.90): Sits on left flank
      // Contact (p: 0.90 - 1.00): Centers up, reacts to mouse
      if (p < 0.2) {
        // Hero
        const t = p / 0.2;
        _targetPos.set(1.4 - t * 0.3, 0.1 - t * 0.2, 0 - t * 0.5);
        _targetRot.set(0.2, 0.4, 0);
        camera.position.z = 7.5 - t * 0.4;
      } else if (p < 0.42) {
        // About (moves to the left flank)
        const t = (p - 0.2) / 0.22;
        _targetPos.set(1.1 - t * 3.0, -0.1 + t * 0.2, -0.5 - t * 0.8);
        _targetRot.set(0.2 + t * 0.4, 0.4 + t * 0.6, t * 0.3);
        camera.position.z = 7.1 - t * 0.3;
      } else if (p < 0.65) {
        // Skills (moves back toward right center)
        const t = (p - 0.42) / 0.23;
        _targetPos.set(-1.9 + t * 3.7, 0.1 - t * 0.3, -1.3 + t * 0.4);
        _targetRot.set(0.6 - t * 0.3, 1.0 + t * 0.5, 0.3 - t * 0.2);
        camera.position.z = 6.8 + t * 0.2;
      } else if (p < 0.85) {
        // Projects / Services (drifts gracefully as atmospheric background)
        const t = (p - 0.65) / 0.2;
        _targetPos.set(1.8 - t * 3.4, -0.2 + t * 0.4, -0.9 - t * 1.5);
        _targetRot.set(0.3 + t * 0.3, 1.5 + t * 0.4, 0.1 + t * 0.2);
        camera.position.z = 7.0 + t * 0.8;
      } else {
        // Contact (centers for powerful closure)
        const t = (p - 0.85) / 0.15;
        _targetPos.set(-1.6 + t * 1.6, 0.2 - t * 0.2, -2.4 + t * 1.2);
        _targetRot.set(0.6 - t * 0.4, 1.9 + t * 0.6, 0.3 - t * 0.3);
        camera.position.z = 7.8 - t * 0.8;
      }

      // Add mouse parallax influence
      _targetPos.x += state.mouseX * 0.6;
      _targetPos.y += state.mouseY * 0.5;

      // Exponential damping towards targets
      sculptureGroup.position.x += (_targetPos.x - sculptureGroup.position.x) * 0.07;
      sculptureGroup.position.y += (_targetPos.y - sculptureGroup.position.y) * 0.07;
      sculptureGroup.position.z += (_targetPos.z - sculptureGroup.position.z) * 0.07;

      sculptureGroup.rotation.x += (_targetRot.x - sculptureGroup.rotation.x) * 0.06;
      sculptureGroup.rotation.y += (_targetRot.y - sculptureGroup.rotation.y) * 0.06;
      sculptureGroup.rotation.z += (_targetRot.z - sculptureGroup.rotation.z) * 0.06;

      // Render scene
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Neural Brain Cortex with Pulse Synapses and Action Potentials
function NeuralBrainMesh() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const pulseLinesRef = useRef();
  const pulsesRef = useRef([]);

  // Generate 650 high-definition brain cortical nodes
  const { nodes, nodePositions, colors, staticLinePositions, linePairs } = useMemo(() => {
    const pts = [];
    const colorArr = [];
    const count = 550;
    const radius = 2.3;

    const colorPurple = new THREE.Color('#7C3AED');
    const colorCyan = new THREE.Color('#06B6D4');
    const colorNeonWhite = new THREE.Color('#E0F2FE');

    for (let i = 0; i < count; i++) {
      const hemisphere = i % 2 === 0 ? 1 : -1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Organic sulci and gyri cortical folds
      const fold =
        0.82 +
        0.14 * Math.sin(theta * 4) * Math.cos(phi * 5) +
        0.08 * Math.sin(phi * 8) +
        0.05 * Math.cos(theta * 2);

      const r = radius * fold;

      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta) * 0.88;
      let z = r * Math.cos(phi) * 1.15;

      // Hemispheric fissure gap
      x = x + hemisphere * 0.38;

      const vec = new THREE.Vector3(x, y, z);
      pts.push(vec);

      // Color gradation across coronal & sagittal axes
      const t = (x + 2.5) / 5.0;
      const vertColor = colorPurple.clone().lerp(colorCyan, THREE.MathUtils.clamp(t, 0, 1));
      if (Math.random() > 0.85) {
        vertColor.lerp(colorNeonWhite, 0.7); // Bright firing nodes
      }
      colorArr.push(vertColor.r, vertColor.g, vertColor.b);
    }

    // Connect close neighbors
    const lines = [];
    const pairs = [];
    const maxDist = 0.92;

    for (let i = 0; i < pts.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < pts.length; j++) {
        const d = pts[i].distanceTo(pts[j]);
        if (d < maxDist && connections < 4) {
          lines.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          pairs.push({ from: pts[i], to: pts[j], dist: d });
          connections++;
        }
      }
    }

    const flatPts = [];
    pts.forEach((p) => flatPts.push(p.x, p.y, p.z));

    return {
      nodes: pts,
      nodePositions: new Float32Array(flatPts),
      colors: new Float32Array(colorArr),
      staticLinePositions: new Float32Array(lines),
      linePairs: pairs,
    };
  }, []);

  // Synaptic signal pulses travelling through connections
  const pulseParticles = useMemo(() => {
    const pulseCount = 45;
    const items = [];
    for (let i = 0; i < pulseCount; i++) {
      const pair = linePairs[Math.floor(Math.random() * linePairs.length)] || {
        from: new THREE.Vector3(),
        to: new THREE.Vector3(),
      };
      items.push({
        pair,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
      });
    }
    return items;
  }, [linePairs]);

  // Frame update: smooth rotation, continuous wave modulation & pointer tilt
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Fluid gyroscopic rotation
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.08 + state.mouse.y * 0.25;
      groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.05 - state.mouse.x * 0.25;
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.12;
    }

    // Pulse position updates
    if (pulsesRef.current && pulseParticles.length > 0) {
      pulseParticles.forEach((p, idx) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.pair = linePairs[Math.floor(Math.random() * linePairs.length)];
        }
        const mesh = pulsesRef.current[idx];
        if (mesh && p.pair) {
          mesh.position.lerpVectors(p.pair.from, p.pair.to, p.progress);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Base Static Synaptic Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={staticLinePositions.length / 3}
            array={staticLinePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6D28D9"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* 2. Neural Vertices */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.085}
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 3. Real-time Animated Synaptic Action Potentials (Glowing Pulses) */}
      <group>
        {pulseParticles.map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (pulsesRef.current[i] = el)}
          >
            <sphereGeometry args={[0.038, 8, 8]} />
            <meshBasicMaterial
              color="#22D3EE"
              transparent
              opacity={0.95}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      {/* 4. Internal Glowing Quantum Neural Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[1.05, 32, 32]}>
          <MeshDistortMaterial
            color="#4338CA"
            emissive="#06B6D4"
            emissiveIntensity={0.35}
            distort={0.38}
            speed={2.2}
            wireframe
            transparent
            opacity={0.16}
          />
        </Sphere>
      </Float>

      {/* 5. Outer Ambient Plasma Field */}
      <Sphere args={[2.8, 16, 16]}>
        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.025}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

// Interactive Neural Brain Canvas with Postprocessing Aesthetics
export const NeuralBrainCanvas = () => {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[520px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[8, 8, 8]} intensity={2.2} color="#22D3EE" />
        <pointLight position={[-8, -8, -8]} intensity={2.0} color="#7C3AED" />
        <pointLight position={[0, 0, 6]} intensity={1.0} color="#E0F2FE" />
        <NeuralBrainMesh />
      </Canvas>
    </div>
  );
};

export const BrainFallback = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
    <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-purple-900/40 via-cyan-900/30 to-purple-600/20 border border-purple-500/30 flex items-center justify-center animate-pulse relative backdrop-blur-xl">
      <div className="absolute inset-4 rounded-full border border-cyan-400/20 border-dashed animate-spin" style={{ animationDuration: '25s' }} />
      <div className="text-center p-6">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_#22D3EE]">
          <span className="font-mono text-cyan-200 font-bold text-xl">AI</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">Active Cortex</p>
        <p className="text-xs text-slate-400 mt-1 font-mono">Neural Model Loaded</p>
      </div>
    </div>
  </div>
);

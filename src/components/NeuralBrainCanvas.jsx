import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// -------------------------------------------------------------
// Procedural Volumetric Brain Cortex Geometry with Lobes & Sulci
// -------------------------------------------------------------
function AnatomicalBrainCortex() {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate 850 anatomical cortical nodes across Frontal, Parietal, Occipital & Temporal lobes
  const { nodePositions, colors, linePositions } = useMemo(() => {
    const pts = [];
    const colorArr = [];
    const nodeCount = 750;
    const baseRadius = 2.4;

    const colorPurple = new THREE.Color('#6D28D9');
    const colorCyan = new THREE.Color('#22D3EE');
    const colorElectricIndigo = new THREE.Color('#4F46E5');
    const colorWhitePulse = new THREE.Color('#FFFFFF');

    for (let i = 0; i < nodeCount; i++) {
      // Hemisphere sign (-1 for left, +1 for right)
      const hemisphere = i % 2 === 0 ? 1 : -1;

      // Stratified sphere coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Anatomical brain shaping factors
      // Frontal lobe expansion, occipital taper, temporal rounding
      const frontalBias = 1.0 + 0.15 * Math.cos(theta) * Math.sin(phi);
      const temporalBias = 1.0 + 0.12 * Math.sin(theta * 2);
      
      // High-frequency cortical convolution ridges (gyri & sulci folds)
      const gyrusFold =
        0.82 +
        0.16 * Math.sin(theta * 5) * Math.cos(phi * 6) +
        0.09 * Math.sin(phi * 10) +
        0.06 * Math.cos(theta * 3);

      const r = baseRadius * gyrusFold * frontalBias * temporalBias;

      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta) * 0.86; // slightly flat top-to-bottom
      let z = r * Math.cos(phi) * 1.18; // elongated anterior-posterior (front to back)

      // Longitudinal cerebral fissure gap separating hemispheres
      x = x + hemisphere * (0.36 + 0.08 * Math.abs(Math.sin(phi * 2)));

      // Occipital lobe dent in cerebellum region
      if (z < -1.2 && y < -0.4) {
        y += 0.3;
      }

      const vec = new THREE.Vector3(x, y, z);
      pts.push(vec);

      // Gradient color based on sagittal (front-to-back) and coronal (left-to-right) position
      const sagittalFactor = (z + 2.5) / 5.0;
      const vertColor = colorPurple.clone().lerp(colorElectricIndigo, sagittalFactor).lerp(colorCyan, (x + 2.5) / 5.0);

      // Random active neural spark nodes
      if (Math.random() > 0.88) {
        vertColor.lerp(colorWhitePulse, 0.75);
      }

      colorArr.push(vertColor.r, vertColor.g, vertColor.b);
    }

    // Connect close neuron nodes with synaptic axons
    const lines = [];
    const maxDistance = 0.88;

    for (let i = 0; i < pts.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < pts.length; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if (dist < maxDistance && connections < 4) {
          lines.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          connections++;
        }
      }
    }

    const flatPts = [];
    pts.forEach((p) => flatPts.push(p.x, p.y, p.z));

    return {
      nodePositions: new Float32Array(flatPts),
      colors: new Float32Array(colorArr),
      linePositions: new Float32Array(lines),
    };
  }, []);

  return (
    <group>
      {/* Synaptic Axons (Luminescent connecting lines) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6D28D9"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Synaptic Nodes (Neuron soma bodies) */}
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
          size={0.095}
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// -------------------------------------------------------------
// Swirling Neural Energy Vortex (Cosmic Data Helix)
// -------------------------------------------------------------
function NeuralEnergyVortex() {
  const vortexRef = useRef();
  const outerRingsRef = useRef();

  // Spiral helical data streams circling the cortex
  const { spiralPositions, spiralColors } = useMemo(() => {
    const count = 420;
    const positions = [];
    const colors = [];
    const colCyan = new THREE.Color('#22D3EE');
    const colPurple = new THREE.Color('#A855F7');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 8;
      const radius = 2.6 + 0.6 * Math.sin(angle * 0.5);
      const height = ((i / count) - 0.5) * 4.2;

      const x = radius * Math.cos(angle);
      const y = height;
      const z = radius * Math.sin(angle);

      positions.push(x, y, z);
      const mix = Math.sin(angle * 0.3) * 0.5 + 0.5;
      const c = colCyan.clone().lerp(colPurple, mix);
      colors.push(c.r, c.g, c.b);
    }

    return {
      spiralPositions: new Float32Array(positions),
      spiralColors: new Float32Array(colors),
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (vortexRef.current) {
      vortexRef.current.rotation.y += delta * 0.45;
      vortexRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }
    if (outerRingsRef.current) {
      outerRingsRef.current.rotation.y -= delta * 0.25;
      outerRingsRef.current.rotation.z = Math.cos(t * 0.4) * 0.12;
    }
  });

  return (
    <group>
      {/* 1. Helical Neural Particle Vortex */}
      <points ref={vortexRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={spiralPositions.length / 3}
            array={spiralPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={spiralColors.length / 3}
            array={spiralColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 2. Gyroscopic Quantum Orbital Rings */}
      <group ref={outerRingsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[3.0, 3.025, 64]} />
          <meshBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <ringGeometry args={[3.2, 3.22, 64]} />
          <meshBasicMaterial
            color="#6D28D9"
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </group>
  );
}

// -------------------------------------------------------------
// Master 3D Neural Cortex Stage (Interactive + Gyro Camera)
// -------------------------------------------------------------
function BrainSceneContainer() {
  const mainGroup = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (mainGroup.current) {
      // Gentle floating levitation
      mainGroup.current.position.y = Math.sin(t * 1.1) * 0.12;
      // Continuous slow majestic rotation
      mainGroup.current.rotation.y += delta * 0.18;
      // Pointer responsive tilt
      mainGroup.current.rotation.x = Math.sin(t * 0.4) * 0.05 + state.mouse.y * 0.22;
      mainGroup.current.rotation.z = Math.cos(t * 0.3) * 0.04 - state.mouse.x * 0.22;
    }
  });

  return (
    <group ref={mainGroup}>
      <AnatomicalBrainCortex />
      <NeuralEnergyVortex />
    </group>
  );
}

export const NeuralBrainCanvas = () => {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[520px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2.4} color="#22D3EE" />
        <pointLight position={[-10, -10, -10]} intensity={2.0} color="#7C3AED" />
        <pointLight position={[0, 4, 6]} intensity={1.2} color="#FFFFFF" />

        <BrainSceneContainer />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.65}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
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

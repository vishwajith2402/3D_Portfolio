import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Neural Brain Node and Synaptic Mesh Component
function BrainNetwork() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate anatomical double-hemisphere brain geometry mathematically
  const { nodePositions, linePositions, colors } = useMemo(() => {
    const nodes = [];
    const colorArray = [];
    const count = 380; // High detail, optimal frame rate
    const radius = 2.4;

    const colorPurple = new THREE.Color('#6D28D9');
    const colorCyan = new THREE.Color('#22D3EE');

    for (let i = 0; i < count; i++) {
      // Stratified hemisphere spherical coordinates
      const hemisphere = i % 2 === 0 ? 1 : -1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Organic cortical folded brain shape equation
      const r =
        radius *
        (0.85 +
          0.12 * Math.sin(theta * 3) * Math.cos(phi * 4) +
          0.08 * Math.sin(phi * 6));

      // Separate into left and right hemispheres with fissure gap
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta) * 0.85; // slightly elongated
      let z = r * Math.cos(phi) * 1.1; // elongated front-to-back

      // Shift hemispheres apart slightly along X
      x = x + hemisphere * 0.35;

      nodes.push(new THREE.Vector3(x, y, z));

      // Gradient color mapping between purple and cyan
      const lerpFactor = (x + 2.5) / 5.0;
      const vertexColor = colorPurple.clone().lerp(colorCyan, Math.max(0, Math.min(1, lerpFactor)));
      colorArray.push(vertexColor.r, vertexColor.g, vertexColor.b);
    }

    // Generate synaptic connections between proximal nodes
    const lineCoords = [];
    const maxDistance = 0.95;

    for (let i = 0; i < nodes.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < maxDistance && connections < 4) {
          lineCoords.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
          connections++;
        }
      }
    }

    const flatNodes = [];
    nodes.forEach(n => flatNodes.push(n.x, n.y, n.z));

    return {
      nodePositions: new Float32Array(flatNodes),
      linePositions: new Float32Array(lineCoords),
      colors: new Float32Array(colorArray),
    };
  }, []);

  // Frame animation: continuous gentle rotation, breathing floating motion
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
      // Gentle responsive tilt toward mouse cursor
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.05 + state.mouse.y * 0.15;
      groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.03 + -state.mouse.x * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Neural Synapses (Connecting Lines) */}
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
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Neural Core Nodes */}
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
          size={0.09}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Inner Glowing Energy Core */}
      <mesh scale={[1.2, 1.0, 1.4]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          wireframe
        />
      </mesh>
    </group>
  );
}

// Lightweight Fallback for unsupported devices or reduced-motion
export const BrainFallback = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-purple-900/40 via-cyan-900/30 to-purple-600/20 border border-purple-500/30 flex items-center justify-center animate-pulse-slow relative backdrop-blur-xl">
      <div className="absolute inset-4 rounded-full border border-cyan-400/20 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
      <div className="text-center p-6">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
          <span className="font-mono text-cyan-300 font-bold text-lg">AI</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">Neural Network Active</p>
        <p className="text-xs text-slate-400 mt-1">Deep Learning Core</p>
      </div>
    </div>
  </div>
);

export const NeuralBrainCanvas = () => {
  return (
    <div className="w-full h-full min-h-[380px] md:min-h-[500px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#6D28D9" />
        <BrainNetwork />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

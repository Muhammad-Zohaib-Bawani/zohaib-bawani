"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

import { useTheme } from 'next-themes';

function Particles({ count = 2000 }) {
  const { resolvedTheme } = useTheme();
  // Match the new premium palette
  const particleColor = resolvedTheme === 'dark' ? '#00d4ff' : '#2563eb';
  
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    pointsRef.current.rotation.x += 0.0003;
    pointsRef.current.rotation.y += 0.0002;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={resolvedTheme === 'dark' ? 0.012 : 0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={resolvedTheme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending}
        opacity={resolvedTheme === 'dark' ? 0.6 : 0.4}
      />
    </Points>
  );
}

function FloatingOrb() {
  const { resolvedTheme } = useTheme();
  const orbRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    orbRef.current.rotation.x = Math.sin(time / 4) * 0.2;
    orbRef.current.rotation.y = Math.cos(time / 2) * 0.2;
    orbRef.current.position.y = Math.sin(time / 2) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={orbRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={resolvedTheme === 'dark' ? "#6d28d9" : "#7c3aed"}
          speed={2}
          distort={0.3}
          radius={1}
          opacity={resolvedTheme === 'dark' ? 0.2 : 0.1}
          transparent
        />
      </Sphere>
    </Float>
  );
}


export function MagicalBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Particles />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}

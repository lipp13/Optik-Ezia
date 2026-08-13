"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface Spectacles3DProps {
  colorway?: "gold" | "silver" | "obsidian" | "rose";
  lensMode?: "clear" | "polarized" | "blueguard" | "rose";
  isMobile?: boolean;
}

const FINISHES = {
  gold: { color: "#E5DFC8", metalness: 0.9, roughness: 0.2 },
  silver: { color: "#E2E8F0", metalness: 0.95, roughness: 0.15 },
  obsidian: { color: "#1F2124", metalness: 0.8, roughness: 0.3 },
  rose: { color: "#E8C8C0", metalness: 0.85, roughness: 0.2 },
};

const LENS_MATERIALS = {
  clear: { color: "#FAFCFC", opacity: 0.5 },
  polarized: { color: "#2A3235", opacity: 0.7 },
  blueguard: { color: "#BAE6FD", opacity: 0.6 },
  rose: { color: "#FBCFE8", opacity: 0.6 },
};

export default function Spectacles3D({
  colorway = "gold",
  lensMode = "clear",
  isMobile = false,
}: Spectacles3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  const finish = FINISHES[colorway] || FINISHES.gold;
  const lens = LENS_MATERIALS[lensMode] || LENS_MATERIALS.clear;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Simple smooth Y rotation
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group
      ref={groupRef}
      position={[isMobile ? 0 : 1.15, isMobile ? -0.4 : 0, 0]}
      scale={isMobile ? 0.85 : 1.2}
    >
      {/* --- ULTRA-LIGHTWEIGHT 3D SPECTACLES MODEL --- */}
      <group position={[0, 0, 0]}>
        {/* LEFT TITANIUM RIM */}
        <mesh position={[-0.8, 0, 0]}>
          <torusGeometry args={[0.7, 0.035, 8, 20]} />
          <meshStandardMaterial
            color={finish.color}
            metalness={finish.metalness}
            roughness={finish.roughness}
          />
        </mesh>

        {/* RIGHT TITANIUM RIM */}
        <mesh position={[0.8, 0, 0]}>
          <torusGeometry args={[0.7, 0.035, 8, 20]} />
          <meshStandardMaterial
            color={finish.color}
            metalness={finish.metalness}
            roughness={finish.roughness}
          />
        </mesh>

        {/* LEFT LENS (FAST NATIVE SHADER) */}
        <mesh position={[-0.8, 0, 0]}>
          <cylinderGeometry args={[0.68, 0.68, 0.02, 20]} />
          <meshStandardMaterial
            color={lens.color}
            transparent
            opacity={lens.opacity}
            roughness={0.1}
          />
        </mesh>

        {/* RIGHT LENS (FAST NATIVE SHADER) */}
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.68, 0.68, 0.02, 20]} />
          <meshStandardMaterial
            color={lens.color}
            transparent
            opacity={lens.opacity}
            roughness={0.1}
          />
        </mesh>

        {/* DOUBLE TITANIUM BRIDGE */}
        <mesh position={[0, 0.26, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
          <meshStandardMaterial color={finish.color} metalness={finish.metalness} roughness={finish.roughness} />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.016, 0.016, 0.32, 8]} />
          <meshStandardMaterial color={finish.color} metalness={finish.metalness} roughness={finish.roughness} />
        </mesh>

        {/* NOSE PADS */}
        <mesh position={[-0.18, -0.06, -0.04]} rotation={[0.2, 0.3, 0]}>
          <boxGeometry args={[0.04, 0.12, 0.02]} />
          <meshStandardMaterial color="#FBFBF9" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.18, -0.06, -0.04]} rotation={[0.2, -0.3, 0]}>
          <boxGeometry args={[0.04, 0.12, 0.02]} />
          <meshStandardMaterial color="#FBFBF9" transparent opacity={0.8} />
        </mesh>

        {/* HINGES & TEMPLES */}
        <mesh position={[-1.45, 0.16, -0.05]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.08, 0.04, 0.03]} />
          <meshStandardMaterial color={finish.color} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[1.45, 0.16, -0.05]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.08, 0.04, 0.03]} />
          <meshStandardMaterial color={finish.color} metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[-1.48, 0.14, -0.85]} rotation={[0.05, -0.1, 0]}>
          <cylinderGeometry args={[0.015, 0.012, 1.7, 8]} />
          <meshStandardMaterial color={finish.color} metalness={finish.metalness} roughness={finish.roughness} />
        </mesh>
        <mesh position={[1.48, 0.14, -0.85]} rotation={[0.05, 0.1, 0]}>
          <cylinderGeometry args={[0.015, 0.012, 1.7, 8]} />
          <meshStandardMaterial color={finish.color} metalness={finish.metalness} roughness={finish.roughness} />
        </mesh>
      </group>

      {/* FLOATING OPTICAL LENS DROPLET */}
      <group position={[1.45, -0.55, -0.3]} rotation={[0.3, -0.2, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.38, 0.38, 0.04, 16]} />
          <meshStandardMaterial color="#F0FDF4" transparent opacity={0.65} roughness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

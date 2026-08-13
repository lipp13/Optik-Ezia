"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function OpticalLensModel({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Slow continuous ambient rotation
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mousePos.y * 0.25,
      0.05
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      mousePos.x * 0.2,
      0.05
    );
  });

  return (
    <group ref={meshRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={isMobile ? 0.3 : 0.6}
      >
        {/* Outer Titanium Frame Rim Sculpture */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.04, 16, isMobile ? 32 : 64]} />
          <meshStandardMaterial
            color="#E5DFC8"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Secondary Inner Rim Detail */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.53, 0.015, 12, isMobile ? 32 : 48]} />
          <meshStandardMaterial
            color="#2D4B50"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Refractive Optical Lens Geometry */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.48, 1.48, 0.18, isMobile ? 32 : 64]} />
          {/* Glass Refraction Material */}
          <MeshTransmissionMaterial
            backside={false}
            samples={isMobile ? 4 : 10}
            resolution={isMobile ? 256 : 512}
            transmission={0.96}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            thickness={0.4}
            ior={1.52}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.05}
            color="#F7F9F9"
          />
        </mesh>

        {/* Subtle Focal Center Crosshair Marker */}
        <group position={[0, 0, 0.1]}>
          <mesh position={[0, 0, 0]}>
            <ringGeometry args={[0.08, 0.09, 32]} />
            <meshBasicMaterial color="#E5DFC8" transparent opacity={0.6} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function HeroLensCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check mobile or low power GPU
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);

    // WebGL capability test
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="h-64 w-64 rounded-full border border-ezia-champagne/30 bg-gradient-to-tr from-ezia-accent/20 via-transparent to-ezia-champagne/10 backdrop-blur-xl" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FBFBF9" />
        <directionalLight position={[-5, -5, -2]} intensity={0.5} color="#2D4B50" />
        <pointLight position={[0, 2, 2]} intensity={1.2} color="#E5DFC8" />
        <OpticalLensModel isMobile={isMobile} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

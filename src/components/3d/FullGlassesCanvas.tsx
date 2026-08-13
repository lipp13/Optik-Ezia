"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Spectacles3D from "./Spectacles3D";

interface FullGlassesCanvasProps {
  colorway?: "gold" | "silver" | "obsidian" | "rose";
  lensMode?: "clear" | "polarized" | "blueguard" | "rose";
}

export default function FullGlassesCanvas({
  colorway = "gold",
  lensMode = "clear",
}: FullGlassesCanvasProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) return null;

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 40 }}
        gl={{
          antialias: false, // Turn off heavy AA for ultra speed
          alpha: true,
          powerPreference: "high-performance",
          depth: true,
        }}
        dpr={[1, 1]} // Fixed 1x DPR (zero supersampling penalty!)
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 3]} intensity={1.8} color="#FBFBF9" />

        <Spectacles3D
          colorway={colorway}
          lensMode={lensMode}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  reducedMotion: boolean;
  isMobile: boolean;
}

function FloatingGeometry({ reducedMotion, isMobile }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.2;
      wireframeRef.current.rotation.y -= delta * 0.3;
    }
  });

  const subdivisions = isMobile ? 1 : 2;

  return (
    <Float
      speed={reducedMotion ? 0 : 1.5}
      rotationIntensity={reducedMotion ? 0 : 0.6}
      floatIntensity={reducedMotion ? 0 : 0.8}
    >
      <group>
        {/* Core Solid Faceted Geometry */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, subdivisions]} />
          <meshStandardMaterial
            color="#11131B"
            roughness={0.25}
            metalness={0.85}
            emissive="#8B5CF6"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Outer Cyan Wireframe Cage */}
        <lineSegments ref={wireframeRef}>
          <wireframeGeometry
            args={[new THREE.IcosahedronGeometry(1.9, subdivisions)]}
          />
          <lineBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.45}
            linewidth={1}
          />
        </lineSegments>

        {/* Ambient Ring Accent */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.4, 0.02, 16, isMobile ? 32 : 64]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3DCanvas({ reducedMotion, isMobile }: SceneProps) {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={isMobile ? [1, 1.2] : [1, 1.8]}
        gl={{
          antialias: !isMobile,
          powerPreference: isMobile ? "low-power" : "high-performance",
          alpha: true,
        }}
        aria-label="Interactive 3D Digital Sculpture"
        role="img"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#22D3EE" />
        <pointLight position={[-5, -4, -2]} intensity={1.5} color="#8B5CF6" />
        <FloatingGeometry reducedMotion={reducedMotion} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

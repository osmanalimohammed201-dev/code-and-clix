"use client";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
const cells = Array.from({ length: 25 }, (_, i) => ({
  x: i % 5,
  y: Math.floor(i / 5),
})).filter(
  ({ x, y }) => y === 0 || y === 4 || x === 0 || (x === 1 && y > 0 && y < 4),
);
function Sculpture() {
  const group = useRef<THREE.Group>(null);
  const blocks = useRef<(THREE.Mesh | null)[]>([]);
  const elapsed = useRef(0);
  const progress = useRef(0);
  useEffect(() => {
    const scroll = () => {
      progress.current = Math.min(
        window.scrollY / Math.max(window.innerHeight, 1),
        1,
      );
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useFrame((state, delta) => {
    elapsed.current += Math.min(delta, 0.05);
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        -0.42 + state.pointer.x * 0.16 + progress.current * 0.3,
        3,
        delta,
      );
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        0.18 - state.pointer.y * 0.09,
        3,
        delta,
      );
      group.current.rotation.z = -0.1 + progress.current * 0.08;
    }
    cells.forEach(({ x, y }, i) => {
      const mesh = blocks.current[i];
      if (!mesh) return;
      const t = THREE.MathUtils.clamp(
        (elapsed.current - i * 0.035) / 1.1,
        0,
        1,
      );
      const remaining = Math.pow(1 - t, 3);
      mesh.position.set(
        (x - 2) * 0.67 + remaining * (x - 2) * 1.1,
        (2 - y) * 0.67 + remaining * (2 - y) * 0.7,
        remaining * ((i % 3) - 1) * 3,
      );
      mesh.rotation.set(remaining * 0.8, remaining * 0.7, 0);
      mesh.scale.setScalar(0.6 + 0.4 * (1 - remaining));
    });
  });
  return (
    <group ref={group}>
      {cells.map((cell, i) => (
        <mesh
          key={`${cell.x}-${cell.y}`}
          ref={(el) => {
            blocks.current[i] = el;
          }}
        >
          <boxGeometry args={[0.59, 0.59, 0.72]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? "#d9e6df" : "#35e5e5"}
            metalness={0.45}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}
export default function Hero3DCanvas({
  active,
  onReady,
  onLost,
}: {
  active: boolean;
  onReady: () => void;
  onLost: () => void;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        onReady();
        gl.domElement.addEventListener("webglcontextlost", onLost, {
          once: true,
        });
      }}
      fallback={null}
      aria-hidden="true"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={3} color="#fff8ed" />
      <directionalLight position={[-4, -2, 2]} intensity={2} color="#35e5e5" />
      <Sculpture />
    </Canvas>
  );
}

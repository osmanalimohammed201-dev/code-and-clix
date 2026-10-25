"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

// Dynamic client-only import with ssr: false
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => <HeroFallbackVisual />,
});

function HeroFallbackVisual() {
  return (
    <div
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center overflow-hidden"
      aria-label="Code and Clix visual sculpture"
    >
      {/* Outer ambient glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#8B5CF6]/30 to-[#22D3EE]/30 blur-3xl pointer-events-none" />

      {/* Decorative CSS Geometric Orb */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#22D3EE]/40 flex items-center justify-center glow-cyan bg-[#11131B]">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#8B5CF6]/50 flex items-center justify-center glow-purple">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#22D3EE]/20 to-[#8B5CF6]/20 border border-[#272A36]" />
        </div>
      </div>
    </div>
  );
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const emptySubscribe = () => () => {};

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function HeroScene() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const hasWebGL = useSyncExternalStore(
    emptySubscribe,
    checkWebGLSupport,
    () => false
  );

  const isMobile = useSyncExternalStore(
    subscribeResize,
    () => window.innerWidth < 768,
    () => false
  );

  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  if (!isMounted || !hasWebGL) {
    return <HeroFallbackVisual />;
  }

  return (
    <div className="w-full relative">
      <Hero3DCanvas reducedMotion={reducedMotion} isMobile={isMobile} />
    </div>
  );
}

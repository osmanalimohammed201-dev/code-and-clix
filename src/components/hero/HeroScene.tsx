"use client";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("./Hero3DCanvas"), { ssr: false });
class SceneBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
function StaticSculpture() {
  return (
    <div className="fallback-visual">
      <div className="block-c">
        {Array.from({ length: 25 }, (_, i) => (
          <i
            key={i}
            className={i < 5 || i >= 20 || i % 5 <= 1 ? "" : "empty"}
          />
        ))}
      </div>
    </div>
  );
}
export default function HeroScene() {
  const shell = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let visible = false;
    let supported = false;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2");
      supported = Boolean(gl);
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      supported = false;
    }
    const update = () => {
      const allow = supported && !motion.matches && !mobile.matches;
      setEnabled(allow);
      setActive(allow && visible && !document.hidden);
      if (!allow) setReady(false);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (shell.current) observer.observe(shell.current);
    motion.addEventListener("change", update);
    mobile.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div
      ref={shell}
      className={`scene-shell ${ready && enabled ? "scene-ready" : ""}`}
      role="img"
      aria-label="Modular blocks forming a three-dimensional C symbol"
    >
      <StaticSculpture />
      {enabled && (
        <SceneBoundary
          onFailure={() => {
            setReady(false);
            setEnabled(false);
          }}
        >
          <div className="canvas-layer">
            <Canvas
              active={active}
              onReady={() => setReady(true)}
              onLost={() => {
                setReady(false);
                setEnabled(false);
              }}
            />
          </div>
        </SceneBoundary>
      )}
    </div>
  );
}

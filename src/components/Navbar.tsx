"use client";
import { useEffect, useRef, useState } from "react";
const links = [
  ["Services", "services"],
  ["Work", "portfolio"],
  ["Process", "process"],
  ["Studio", "about"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 800) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a className="brand" href="#" aria-label="Code and Clix home">
          <span className="brand-symbol" aria-hidden="true">
            ✳
          </span>{" "}
          Code and Clix
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <a href={`#${id}`} key={id}>
              {name}
            </a>
          ))}
        </nav>
        <a className="button primary nav-cta" href="#contact">
          Let’s Talk ↗
        </a>
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {[...links, ["Start a Project", "contact"]].map(([name, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {name}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

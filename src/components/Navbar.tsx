"use client";

import { useState } from "react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#11131B] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group text-xl font-bold tracking-tight text-[#F8FAFC]"
          aria-label="Code and Clix Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] group-hover:bg-[#8B5CF6] transition-colors" />
          <span>Code and Clix</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#08090D] bg-[#22D3EE] hover:bg-[#8B5CF6] hover:text-[#F8FAFC] rounded-lg transition-all glow-cyan hover:glow-purple"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          id="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-3 min-w-[44px] min-h-[44px] rounded-lg text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-[#1B1E2B] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#11131B] border-b border-[#272A36] px-4 pt-3 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-[#181B26] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-[#08090D] bg-[#22D3EE] hover:bg-[#8B5CF6] hover:text-[#F8FAFC] transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

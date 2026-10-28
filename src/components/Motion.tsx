"use client";
import { useEffect } from "react";
export default function Motion() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.hasAttribute("data-step"))
            entry.target.classList.add("is-active");
          else if (!query.matches)
            animations.push(
              entry.target.animate(
                [
                  { transform: "translateY(24px)", opacity: 0.65 },
                  { transform: "translateY(0)", opacity: 1 },
                ],
                { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
              ),
            );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25 },
    );
    document
      .querySelectorAll("[data-reveal],[data-step]")
      .forEach((el) => observer.observe(el));
    const cancel = () => {
      if (query.matches) animations.forEach((a) => a.cancel());
    };
    query.addEventListener("change", cancel);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      query.removeEventListener("change", cancel);
    };
  }, []);
  return null;
}

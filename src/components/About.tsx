const PRINCIPLES = [
  {
    title: "Design Integrity",
    description:
      "Bespoke layouts, balanced proportions, and typography tailored to your brand identity — not adapted from generic templates.",
    accent: "text-[#22D3EE]",
    border: "border-[#22D3EE]/25",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Technical Discipline",
    description:
      "Modern TypeScript, zero unnecessary runtime bloat, and responsive performance across all viewports from 360px to widescreen.",
    accent: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]/25",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Honest Transparency",
    description:
      "Clear communication throughout the project lifecycle. No hidden costs, no invented credentials, and no promises beyond our verified capabilities.",
    accent: "text-[#22D3EE]",
    border: "border-[#22D3EE]/25",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Performance First",
    description:
      "Every site we build targets Core Web Vitals compliance, optimal Lighthouse scores, and fast first-paint times on real-world network conditions.",
    accent: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]/25",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#08090D] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left column: Labels + Heading */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#8B5CF6] mb-3">
              About The Studio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] leading-tight">
              Engineering precision meets visual excellence.
            </h2>

            {/* Decorative accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#272A36]" />
              <span className="text-xs font-mono text-[#A1A1AA]">Est. 2024</span>
            </div>
          </div>

          {/* Right column: Philosophy text */}
          <div className="lg:col-span-7 space-y-5 text-base text-[#A1A1AA] leading-relaxed">
            <p>
              Code and Clix is an independent digital studio focused on designing and
              developing distinct web experiences. We believe exceptional websites are
              built at the intersection of aesthetic restraint and rigorous code standards.
            </p>
            <p>
              Rather than relying on bloated templates or generic design patterns, we
              approach every engagement with custom typography, clean semantic architecture,
              and purposeful digital interactions that respect your audience&apos;s attention
              and device performance.
            </p>
            <p>
              Our work spans brand identity systems, full-stack web applications,
              interactive 3D experiences, and comprehensive digital redesigns — all
              executed without inflated claims and delivered to an uncompromising standard.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className={`group flex gap-4 p-5 rounded-xl bg-[#11131B] border border-[#272A36] ${principle.border} hover:bg-[#13151F] transition-all duration-300`}
            >
              <div className={`mt-0.5 flex-shrink-0 ${principle.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                {principle.icon}
              </div>
              <div>
                <h3 className={`text-sm font-semibold text-[#F8FAFC] mb-1.5 group-hover:${principle.accent} transition-colors`}>
                  {principle.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

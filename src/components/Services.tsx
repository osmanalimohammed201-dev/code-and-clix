const SERVICES = [
  {
    title: "Website Design",
    description:
      "Bespoke user interfaces engineered for clarity, brand distinction, and high conversion. We blend thoughtful visual hierarchy with intuitive user experiences.",
    tag: "Design & UX",
    accentBorder: "border-l-[#22D3EE]",
    accentText: "text-[#22D3EE]",
    hoverGlow: "hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.35)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Website Development",
    description:
      "Modern, full-stack web applications built on Next.js and TypeScript. Clean architecture, lightning-fast load times, and rock-solid responsiveness across devices.",
    tag: "Full-Stack Web",
    accentBorder: "border-l-[#8B5CF6]",
    accentText: "text-[#8B5CF6]",
    hoverGlow: "hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.35)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Interactive 3D Experiences",
    description:
      "Web-based 3D models and interactive digital objects powered by WebGL and Three.js. Built with graceful degradation for mobile and reduced-motion support.",
    tag: "Creative Tech",
    accentBorder: "border-l-[#22D3EE]",
    accentText: "text-[#22D3EE]",
    hoverGlow: "hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.35)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Website Redesign",
    description:
      "Revamping existing digital touchpoints into elevated, modern web properties that reflect your evolution, improve search visibility, and captivate modern audiences.",
    tag: "Transformation",
    accentBorder: "border-l-[#8B5CF6]",
    accentText: "text-[#8B5CF6]",
    hoverGlow: "hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.35)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#08090D] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Tailored digital services engineered for impact.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            From strategic concept to final production, we deliver bespoke solutions
            designed for modern digital brands.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`
                group relative p-8 rounded-xl bg-[#11131B]
                border border-[#272A36] border-l-4 ${service.accentBorder}
                ${service.hoverGlow}
                hover:border-opacity-80
                hover:bg-[#13151F]
                transition-all duration-300
              `}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-center justify-between mb-5">
                <div className={`${service.accentText} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {service.icon}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#08090D] border border-[#272A36] text-[#A1A1AA]">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold tracking-tight mb-3 text-[#F8FAFC] group-hover:${service.accentText} transition-colors duration-300`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {service.description}
              </p>

              {/* Subtle bottom accent line on hover */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full ${service.accentBorder.replace('border-l-', 'bg-')} transition-all duration-500 rounded-b-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

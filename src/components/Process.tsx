const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep into your brand identity, audience expectations, business objectives, and technical constraints to establish a focused strategic roadmap.",
    accentColor: "text-[#22D3EE]",
    borderColor: "border-[#22D3EE]/30",
    glowColor: "group-hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.3)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "Translating strategy into wireframes, typographic systems, and high-fidelity interactive prototypes with a disciplined eye for aesthetic precision.",
    accentColor: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/30",
    glowColor: "group-hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.3)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Writing clean, modular TypeScript and Next.js code — building responsive components, smooth animations, and optimised asset pipelines for fast, reliable delivery.",
    accentColor: "text-[#22D3EE]",
    borderColor: "border-[#22D3EE]/30",
    glowColor: "group-hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.3)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Comprehensive multi-viewport testing, performance audits, accessibility verification, and smooth production deployment with post-launch quality checks.",
    accentColor: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/30",
    glowColor: "group-hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.3)]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#08090D] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] mb-3">
            Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            A structured process from concept to deployment.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            We avoid unnecessary complexity. Our workflow is clear, iterative, and
            focused on delivering high-fidelity digital products efficiently.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`
                group relative p-6 rounded-xl bg-[#11131B]
                border border-[#272A36] ${step.borderColor}
                ${step.glowColor}
                hover:bg-[#13151F]
                transition-all duration-300
                flex flex-col
              `}
            >
              {/* Connector line between cards (desktop) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-8 w-6 h-px bg-[#272A36] z-10" />
              )}

              {/* Step header */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-mono font-bold ${step.accentColor}`}>
                  {step.number}
                </span>
                <div className={`${step.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold text-[#F8FAFC] tracking-tight mb-3 group-hover:${step.accentColor} transition-colors duration-300`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#A1A1AA] leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

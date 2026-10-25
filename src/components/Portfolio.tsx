const PROJECTS = [
  {
    title: "NOIR COFFEE",
    badge: "Concept Project",
    category: "E-Commerce & Brand",
    description:
      "A minimalist luxury coffee brand experience featuring bespoke editorial typography, rich dark surfaces, and an intuitive product discovery flow designed for premium conversion.",
    tags: ["Brand Identity", "Next.js", "Design System"],
    accentColor: "group-hover:border-[#22D3EE]/40",
    accentTitle: "group-hover:text-[#22D3EE]",
    dot: "bg-[#22D3EE]",
  },
  {
    title: "LUMA STUDIO",
    badge: "Concept Project",
    category: "Creative Agency",
    description:
      "An interactive visual showcase built for a high-end photography and production studio, emphasising smooth transitions, full-bleed media grids, and atmospheric dark mode aesthetics.",
    tags: ["Interactive UI", "Editorial", "Tailwind CSS"],
    accentColor: "group-hover:border-[#8B5CF6]/40",
    accentTitle: "group-hover:text-[#8B5CF6]",
    dot: "bg-[#8B5CF6]",
  },
  {
    title: "FORME",
    badge: "Concept Project",
    category: "Architecture & Design",
    description:
      "A modern digital archive for an architectural firm, structured around spatial minimalism, project case archives, typographic restraint, and precise grid-based layout systems.",
    tags: ["Spatial Design", "Typography", "Performance"],
    accentColor: "group-hover:border-[#22D3EE]/40",
    accentTitle: "group-hover:text-[#22D3EE]",
    dot: "bg-[#22D3EE]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#08090D] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#8B5CF6] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Selected concept projects.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Explorations in digital architecture, typography, and purposeful interaction.
            Each project demonstrates our standard for design and code fidelity.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={`
                group relative flex flex-col rounded-xl bg-[#11131B]
                border border-[#272A36] ${project.accentColor}
                hover:bg-[#13151F]
                transition-all duration-300
                overflow-hidden
              `}
            >
              {/* Card top accent bar */}
              <div className={`h-[2px] w-full ${project.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="flex flex-col flex-1 p-7">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.dot} flex-shrink-0`} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#08090D] border border-[#272A36] text-[#A1A1AA]">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3 ${project.accentTitle} transition-colors duration-300`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#272A36]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#A1A1AA] bg-[#08090D] px-2.5 py-1 rounded border border-[#272A36] group-hover:border-[#272A36]/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

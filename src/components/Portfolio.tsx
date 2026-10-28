const projects = [
  {
    name: "NOIR COFFEE",
    type: "E-commerce & brand",
    style: "noir",
    line: "A slower ritual.",
    copy: "An exploration of editorial typography and a considered coffee-shopping experience.",
  },
  {
    name: "LUMA STUDIO",
    type: "Photography & production",
    style: "luma",
    line: "Light. Form. Feeling.",
    copy: "An exploration of expressive layouts for a photography and production studio.",
  },
  {
    name: "FORME",
    type: "Architecture & design",
    style: "forme",
    line: "Space to think.",
    copy: "An exploration of quiet typography and spatial layouts for an architectural archive.",
  },
];
export default function Portfolio() {
  return (
    <section id="portfolio" className="section work-section">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">02 / Selected explorations</p>
          <h2 data-reveal>
            Different brands.
            <br />
            <span className="muted">Distinct perspectives.</span>
          </h2>
          <p className="section-intro">
            Concept projects from the studio. These original visual studies are
            placeholders for future project screenshots, not client commissions.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article className={`project project-${p.style}`} key={p.name}>
              <div
                className={`project-preview ${p.style}`}
                role="img"
                aria-label={`${p.name}: illustrative concept preview, not a live website screenshot`}
              >
                <div className="preview-bar">
                  <span>{p.name}</span>
                  <span>CONCEPT / 0{i + 1}</span>
                </div>
                <div className="preview-art" aria-hidden="true">
                  {p.style === "noir" ? (
                    <div className="coffee-mark">
                      N<span>☕</span>
                    </div>
                  ) : p.style === "luma" ? (
                    <div className="luma-orb" />
                  ) : (
                    <div className="architecture">
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                </div>
                <div className="preview-title">{p.line}</div>
                <span className="preview-label">
                  Illustrative concept preview
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <p className="eyebrow">{p.type} / Concept</p>
                  <h3>{p.name}</h3>
                </div>
                <span aria-hidden="true">0{i + 1}</span>
              </div>
              <p className="project-copy">{p.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

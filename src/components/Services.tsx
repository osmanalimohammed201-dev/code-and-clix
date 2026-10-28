const services = [
  [
    "Website Design",
    "Clarity from the first click.",
    "Distinctive layouts, intuitive navigation, and a visual identity that feels like your business.",
    "Strategy / UX / Interface",
  ],
  [
    "Website Development",
    "Made to work beautifully.",
    "Responsive websites built with clean code, careful attention to accessibility, and room to grow.",
    "Next.js / Responsive web",
  ],
  [
    "Interactive Experiences",
    "A new dimension to your brand.",
    "Purposeful 3D and motion that invite people to explore, with simpler experiences for smaller devices.",
    "3D / Motion / Creative code",
  ],
  [
    "Website Redesign",
    "Your next chapter, online.",
    "Rethink an existing website with clearer messaging, stronger design, and a smoother customer journey.",
    "Audit / Refresh / Rebuild",
  ],
];
export default function Services() {
  return (
    <section id="services" className="section shell">
      <div className="section-heading">
        <p className="eyebrow">01 / What we do</p>
        <h2 data-reveal>
          Small details.
          <br />
          <span className="muted">Bigger possibilities.</span>
        </h2>
        <p className="section-intro">
          From a first website to a complete rethink. We bring design and
          development together around your business.
        </p>
      </div>
      <div className="service-list">
        {services.map(([title, subtitle, description, tags], i) => (
          <a href="#contact" className="service-row" key={title}>
            <span className="eyebrow service-number">0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <span className="service-tags">{tags}</span>
            </div>
            <div className="service-description">
              <h4>{subtitle}</h4>
              <p>{description}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

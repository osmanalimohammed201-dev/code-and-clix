import HeroScene from "@/components/hero/HeroScene";

export default function Hero() {
  return (
    <section className="hero grid-surface" aria-labelledby="hero-title">
      <div className="shell hero-top">
        <span className="eyebrow">
          <i /> Independent digital studio
        </span>
        <span className="eyebrow hero-note">
          Design × Development × Dimension
        </span>
      </div>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            Built to
            <br />
            stand <span className="accent">out.</span>
          </h1>
          <p>
            Distinctive websites for businesses ready for their next chapter.
            Thoughtfully designed. Precisely built.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">
              Start a Project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#portfolio">
              Explore Our Work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div className="hero-art">
          <HeroScene />
          <div className="art-caption eyebrow">
            <span>Fig. 01 — Ideas, assembled.</span>
            <span aria-hidden="true">[ C / C ]</span>
          </div>
        </div>
      </div>
      <div className="shell hero-bottom">
        <span>
          Good design gets noticed.
          <br />
          Great experiences get remembered.
        </span>
        <a href="#services" className="eyebrow">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

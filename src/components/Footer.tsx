export default function Footer() {
  return (
    <footer className="footer grid-surface">
      <div className="shell">
        <div className="footer-top">
          <a href="#" className="brand">
            Code and Clix
            <span className="accent" aria-hidden="true">
              ↗
            </span>
          </a>
          <nav aria-label="Footer navigation">
            {["Services", "Portfolio", "Process", "About", "Contact"].map(
              (link) => (
                <a href={`#${link.toLowerCase()}`} key={link}>
                  {link}
                </a>
              ),
            )}
          </nav>
          <a className="text-link" href="#">
            Back to top ↑
          </a>
        </div>
        <div className="footer-wordmark" aria-label="Code and Clix">
          CODE &amp; CLIX
        </div>
        <div className="footer-bottom eyebrow">
          <span>© {2026} Code and Clix</span>
          <span>Thoughtfully designed. Precisely built.</span>
        </div>
      </div>
    </footer>
  );
}

const steps = [
  [
    "Discover",
    "First, the right questions.",
    "We get to know your business, your audience, and what your website needs to achieve.",
  ],
  [
    "Design",
    "Find your visual voice.",
    "We shape the structure, typography, and interactions into a direction you can see and review.",
  ],
  [
    "Develop",
    "Bring every detail to life.",
    "We turn the approved design into a responsive, accessible website, with purposeful motion.",
  ],
  [
    "Launch",
    "Ready for the real world.",
    "We check layouts, links, and performance together, then prepare your website for launch.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="section shell process-layout">
      <div className="process-heading">
        <p className="eyebrow">03 / How we work</p>
        <h2 data-reveal>
          Clear steps.
          <br />
          <span className="muted">Shared direction.</span>
        </h2>
        <p>
          Good work starts with understanding. You stay part of the process,
          from the first conversation to the final detail.
        </p>
        <a className="text-link" href="#contact">
          Let’s talk about your project ↗
        </a>
      </div>
      <ol className="process-list">
        {steps.map(([title, line, copy], i) => (
          <li className="process-step" data-step key={title}>
            <span className="step-index">0{i + 1}</span>
            <div>
              <p className="eyebrow">{line}</p>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

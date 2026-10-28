"use client";
import { useState } from "react";
export default function Contact() {
  const [prepared, setPrepared] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project inquiry: ${data.get("projectType")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBudget: ${data.get("budget") || "Not specified"}\n\n${data.get("message")}`;
    window.location.href = `mailto:codeandclix@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <section id="contact" className="section shell contact-layout">
      <div>
        <p className="eyebrow">05 / Your next chapter</p>
        <h2 data-reveal>
          Let’s build
          <br />
          something
          <br />
          <span className="accent">worth a click.</span>
        </h2>
        <p className="contact-intro">
          A new website, a fresh direction, or an idea you’d like to explore.
          Tell us what you have in mind.
        </p>
        <a
          className="contact-email text-link"
          href="mailto:codeandclix@gmail.com"
        >
          codeandclix@gmail.com ↗
        </a>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <p className="form-note" id="email-note">
          This form prepares an email in your email app. Review and send it
          there to deliver your inquiry.
        </p>
        <div className="form-grid">
          <label htmlFor="contact-name">
            Your name
            <input
              id="contact-name"
              autoComplete="name"
              name="name"
              required
              placeholder="Your name"
            />
          </label>
          <label htmlFor="contact-email">
            Email address
            <input
              id="contact-email"
              autoComplete="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label htmlFor="contact-project-type">
          What are you looking for?
          <select id="contact-project-type" name="projectType">
            <option>Website Design</option>
            <option>Website Development</option>
            <option>Interactive 3D Experience</option>
            <option>Website Redesign</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="contact-budget">
          Budget range (optional)
          <input
            id="contact-budget"
            name="budget"
            placeholder="Your budget and currency"
          />
        </label>
        <label htmlFor="contact-message">
          Tell us about your project
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Your business, goals, and timeline…"
          />
        </label>
        <button
          className="button primary"
          type="submit"
          aria-describedby="email-note"
        >
          Prepare email <span aria-hidden="true">↗</span>
        </button>
        {prepared && (
          <p role="status" className="form-note">
            Email draft requested. Nothing has been sent by this website. If
            your email app didn’t open, email us directly using the address
            beside this form.
          </p>
        )}
      </form>
    </section>
  );
}

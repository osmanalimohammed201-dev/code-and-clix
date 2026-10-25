"use client";

import { useState } from "react";

type FormState = "idle" | "submitted";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitted");
  };

  const handleReset = () => {
    setFormState("idle");
  };

  return (
    <section id="contact" className="py-24 bg-[#08090D] border-b border-[#272A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] mb-3">
            Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Let&apos;s talk about your next project.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA]">
            Have an upcoming project, redesign, or interactive concept in mind? Reach out below.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-5">

          {/* ⚠ Backend Status Notice — IMPORTANT */}
          <div className="p-4 rounded-lg bg-[#11131B] border border-[#272A36]">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-[#22D3EE] mb-1">
                  Demonstration Mode — Form Not Connected
                </p>
                <p className="text-xs leading-relaxed text-[#A1A1AA]">
                  This form is an interface demonstration only. It is{" "}
                  <span className="font-semibold text-[#F8FAFC]">not connected to any email service</span>{" "}
                  and will not send messages. For direct inquiries, contact:{" "}
                </p>
                <p className="mt-2 text-xs font-mono px-2.5 py-1.5 rounded bg-[#08090D] border border-[#272A36] text-[#22D3EE] select-all break-all">
                  codeandclix@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-xl bg-[#11131B] border border-[#272A36]">
            {formState === "submitted" ? (
              <div className="text-center py-8 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 mx-auto">
                  <svg className="w-6 h-6 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-[#F8FAFC]">Form submitted (demo only)</p>
                <p className="text-xs text-[#A1A1AA] max-w-xs mx-auto leading-relaxed">
                  No message was delivered. This form is running in demonstration mode without a
                  connected backend service. Please use the contact email above for real inquiries.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-xs text-[#22D3EE] hover:text-[#F8FAFC] underline underline-offset-2 transition-colors"
                >
                  Reset form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg bg-[#08090D] border border-[#272A36] text-[#F8FAFC] placeholder-[#A1A1AA]/40 text-sm focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#08090D] border border-[#272A36] text-[#F8FAFC] placeholder-[#A1A1AA]/40 text-sm focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-colors"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg bg-[#08090D] border border-[#272A36] text-[#F8FAFC] text-sm focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-colors appearance-none"
                  >
                    <option value="website-design">Website Design</option>
                    <option value="website-development">Website Development</option>
                    <option value="interactive-3d">Interactive 3D Experience</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                  >
                    Budget Range <span className="text-[#A1A1AA]/50 normal-case font-normal">(optional)</span>
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-lg bg-[#08090D] border border-[#272A36] text-[#F8FAFC] text-sm focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-colors appearance-none"
                  >
                    <option value="">Prefer not to say</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 – $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-plus">$15,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your goals, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-[#08090D] border border-[#272A36] text-[#F8FAFC] placeholder-[#A1A1AA]/40 text-sm focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-colors resize-y min-h-[100px]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#08090D] bg-[#22D3EE] hover:bg-[#8B5CF6] hover:text-[#F8FAFC] rounded-lg transition-all glow-cyan hover:glow-purple min-h-[44px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  Send Inquiry
                </button>

                <p className="text-[11px] text-center text-[#A1A1AA]/70">
                  Demo mode — this form does not submit. No data is collected or transmitted.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

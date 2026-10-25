import HeroScene from "@/components/hero/HeroScene";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08090D] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#272A36]">
      {/* Ambient background glow accents */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[300px] bg-[#8B5CF6]/15 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#22D3EE]/15 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* HTML Text Content Layer */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11131B] border border-[#272A36] text-xs font-medium text-[#22D3EE] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>Independent Digital Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.08]">
              We Build{" "}
              <span className="text-[#22D3EE] glow-text-cyan">Digital</span>{" "}
              <span className="text-[#8B5CF6] glow-text-purple">
                Experiences.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We design and develop exceptional websites that help brands stand
              out, connect with people, and grow online.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#08090D] bg-[#22D3EE] hover:bg-[#8B5CF6] hover:text-[#F8FAFC] rounded-lg transition-all glow-cyan hover:glow-purple min-h-[44px]"
              >
                Explore Our Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#F8FAFC] bg-[#11131B] hover:bg-[#1B1E2B] border border-[#272A36] rounded-lg transition-colors min-h-[44px]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* 3D Scene Layer */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}

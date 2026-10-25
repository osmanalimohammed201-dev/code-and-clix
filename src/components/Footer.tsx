export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#11131B] border-t border-[#272A36] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE]" />
            <span className="text-lg font-bold tracking-tight text-[#F8FAFC]">
              Code and Clix
            </span>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#A1A1AA]">
            <a href="#services" className="hover:text-[#F8FAFC] transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#F8FAFC] transition-colors">
              Portfolio
            </a>
            <a href="#process" className="hover:text-[#F8FAFC] transition-colors">
              Process
            </a>
            <a href="#about" className="hover:text-[#F8FAFC] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-xs text-[#A1A1AA]">
            &copy; {currentYear} Code and Clix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

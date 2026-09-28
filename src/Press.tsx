import { Magnet, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Press: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#1A2E40] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="text-[#3A6EA5]">
              <Magnet size={24} />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              MagNet Agents
            </h2>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
            >
              Home
            </a>
            <a
              href="/press"
              className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
            >
              Press
            </a>
            <a
              href="/pricing-plans"
              className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
            >
              Pricing
            </a>
          </div>
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.magnetlegal.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-[#C9A34D] bg-transparent px-5 py-2.5 text-sm font-medium text-[#C9A34D] hover:bg-[#C9A34D] hover:text-[#1A2E40] transition"
            >
              <span>Sign up/Login</span>
            </a>
            <a
              href="https://calendly.com/magnetagents/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-[#3A6EA5] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#325d8c] transition"
            >
              <span>Book a demo</span>
              <ChevronRight className="ml-1" size={16} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#E6E6E6] hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-4 pb-4 pt-2 space-y-4 bg-[#1A2E40] border-t border-[#3A6EA5]/20">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/press"
                className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Press
              </a>
              <a
                href="/pricing-plans"
                className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
            </div>
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="https://app.magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-[#C9A34D] bg-transparent px-5 py-3 text-base font-medium text-[#C9A34D] hover:bg-[#C9A34D] hover:text-[#1A2E40] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Sign up/Login</span>
              </a>
              <a
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-[#3A6EA5] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-[#325d8c] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a demo</span>
                <ChevronRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-32 mt-16 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-[#1A2E40] mb-10">
          Press & Media
        </h1>
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {/* Law.com Article */}
          <a
            href="https://www.law.com/legaltechnews/2025/08/25/why-2-cornell-tech-grads-built-a-business-development-tool-for-individual-firm-lawyers/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#E6E6E6] bg-white shadow-md hover:shadow-lg transition p-6 group"
          >
            <div className="flex items-center gap-4">
              {/* Law.com logo or fallback */}
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#3A6EA5]/10">
                <span className="text-xl font-bold text-[#3A6EA5]">L</span>
              </span>
              <div>
                <div className="text-lg font-semibold text-[#1A2E40] group-hover:text-[#3A6EA5] transition">
                  Law.com
                </div>
                <div className="text-sm text-[#6B7280] mt-1">
                  Why 2 Cornell Tech Grads Built a Business Development Tool for
                  Individual & Firm Lawyers
                </div>
                <div className="text-xs text-[#C9A34D] mt-1">
                  August 25, 2025
                </div>
              </div>
            </div>
          </a>
          {/* Example for future articles: */}
          {/*
          <a
            href="ARTICLE_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#E6E6E6] bg-white shadow-md hover:shadow-lg transition p-6 group"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#3A6EA5]/10">
                <span className="text-xl font-bold text-[#3A6EA5]">[Logo]</span>
              </span>
              <div>
                <div className="text-lg font-semibold text-[#1A2E40] group-hover:text-[#3A6EA5] transition">[Publication Name]</div>
                <div className="text-sm text-[#6B7280] mt-1">[Article Title]</div>
                <div className="text-xs text-[#C9A34D] mt-1">[Date]</div>
              </div>
            </div>
          </a>
          */}
        </div>
      </main>
    </div>
  );
};

export default Press;

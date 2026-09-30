import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "./lib/authCookie";

// The one shared header + footer for every real page (Home, Pricing, Privacy,
// Terms). Previously each page hand-copied this markup — see the code review
// that flagged the duplication (and the "How It Works" href drifting between
// copies as a result).

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Lazy initializer (not useState(false) + an effect) so a logged-in
  // visitor doesn't see a flash of the logged-out CTAs on first paint.
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    // The Login/Log out links open app.magnetlegal.co in a separate tab, so
    // this tab's cookie read can go stale the moment the visitor signs in
    // or out there. Re-check whenever this tab regains focus.
    const resync = () => setLoggedIn(isLoggedIn());
    window.addEventListener("focus", resync);
    document.addEventListener("visibilitychange", resync);
    return () => {
      window.removeEventListener("focus", resync);
      document.removeEventListener("visibilitychange", resync);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-10 border-b border-cool-taupe bg-ivory-white/95 shadow-card backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logos/magnet-logo-blue.png"
            alt="MagNet Logo"
            className="mt-0.5 h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#how-it-works"
            className="font-display text-sm font-medium text-steel-gray transition hover:text-ink-black"
          >
            How It Works
          </a>
          <Link
            to="/pricing-plans"
            className="font-display text-sm font-medium text-steel-gray transition hover:text-ink-black"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          {loggedIn ? (
            <a
              href="https://app.magnetlegal.co/logout"
              className="flex items-center justify-center px-5 py-2.5 font-display text-sm font-medium text-steel-gray transition-colors hover:text-ink-black"
            >
              <span>Log out</span>
            </a>
          ) : (
            <a
              href="https://app.magnetlegal.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-cool-taupe bg-ivory-white px-5 py-2.5 font-display text-sm font-medium text-steel-gray shadow-sm transition-colors hover:bg-cobalt-blue hover:text-ivory-white"
            >
              <span>Login</span>
            </a>
          )}
          <a
            href={
              loggedIn
                ? "https://app.magnetlegal.co"
                : "https://calendly.com/magnetagents/30min"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md border border-transparent bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
          >
            <span>{loggedIn ? "Open Magnet" : "Book a Demo"}</span>
          </a>
        </div>

        {/* Mobile: the desktop CTA group is hidden below md, so surface the
            primary CTA next to the menu button instead of burying it in the menu. */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={
              loggedIn
                ? "https://app.magnetlegal.co"
                : "https://calendly.com/magnetagents/30min"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-brass-gold px-3 py-2 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
          >
            <span>{loggedIn ? "Open Magnet" : "Book a Demo"}</span>
          </a>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-steel-gray transition hover:bg-cool-taupe/50 hover:text-ink-black md:hidden"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
      >
        <div className="space-y-4 border-t border-cool-taupe bg-ivory-white px-4 pb-4 pt-2">
          <div className="flex flex-col">
            <a
              href="/#how-it-works"
              className="flex min-h-[3.25rem] items-center border-b border-cool-taupe font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-black transition hover:text-cobalt-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link
              to="/pricing-plans"
              className="flex min-h-[3.25rem] items-center border-b border-cool-taupe font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-black transition hover:text-cobalt-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            {loggedIn ? (
              <a
                href="https://app.magnetlegal.co/logout"
                className="flex items-center justify-center px-5 py-3 font-display text-base font-medium text-ink-black transition-colors hover:text-ink-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Log out</span>
              </a>
            ) : (
              <a
                href="https://app.magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md border border-cool-taupe bg-ivory-white px-5 py-3 font-display text-base font-medium text-ink-black shadow-sm transition-colors hover:bg-cobalt-blue hover:text-ivory-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Login</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cool-taupe bg-ivory-white">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-[160px] sm:px-6 lg:px-8">
        <img
          src="/logos/magnet-logo-blue.png"
          alt="MagNet"
          className="mx-auto h-12 w-auto object-contain sm:h-16 lg:h-20"
        />

        <div className="mt-[140px] flex flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-4">
          <img
            src="/nvidia-inception-program-badge-rgb-for-screen.png"
            alt="NVIDIA Inception Program"
            className="hidden h-[56px] w-auto md:block"
          />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:contents">
            <div className="contents md:flex md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2">
              <Link
                to="/terms-of-service"
                className="font-plex text-xs text-steel-gray transition hover:text-ink-black"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="font-plex text-xs text-steel-gray transition hover:text-ink-black"
              >
                Privacy Policy
              </Link>
              <a
                href="mailto:contact@magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-plex text-xs text-steel-gray transition hover:text-ink-black"
              >
                Contact
              </a>
            </div>

            <a
              href="https://www.linkedin.com/company/magnet-legal-ai/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-plex text-xs text-steel-gray transition hover:text-ink-black"
            >
              LinkedIn
            </a>
          </div>

          <p className="font-plex text-xs text-steel-gray">
            &copy; {new Date().getFullYear()} Magnet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-ivory-white"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      <Nav />
      <main className="flex-1 pt-32 sm:pt-36">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

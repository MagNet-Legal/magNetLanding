import { Menu, X } from "lucide-react";
import { Fragment, useState } from "react";

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trustedFirmRows = [
    [
      "Freshfields Bruckhaus Deringer",
      "Lowenstein Sandler",
      "White & Case",
      "Alston & Bird",
      "Eversheds Sutherland",
    ],
    [
      "Frankfurt Kurnit Klein & Selz",
      "DLA Piper",
      "Orrick, Herrington & Sutcliffe",
      "Reed Smith",
      "Akin Gump Strauss Hauer & Feld",
    ],
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD] overflow-x-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-10 border-b border-cool-taupe bg-ivory-white/95 shadow-card backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logos/magnet-logo-blue.png"
                alt="MagNet Logo"
                className="mt-0.5 h-8 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#how-it-works"
                className="font-display text-sm font-medium text-steel-gray transition hover:text-ink-black"
              >
                How It Works
              </a>
              <a
                href="/pricing-plans"
                className="font-display text-sm font-medium text-steel-gray transition hover:text-ink-black"
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
                className="flex items-center justify-center rounded-md border border-cool-taupe bg-ivory-white px-5 py-2.5 font-display text-sm font-medium text-steel-gray shadow-sm transition-colors hover:bg-cobalt-blue hover:text-ivory-white"
              >
                <span>Login</span>
              </a>
              <a
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md border border-transparent bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy transition-colors hover:bg-brass-deep"
              >
                <span>Book a Demo</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-steel-gray transition hover:bg-cool-taupe/50 hover:text-ink-black"
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
            <div className="space-y-4 border-t border-cool-taupe bg-ivory-white px-4 pb-4 pt-2">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                <a
                  href="#how-it-works"
                  className="border-b border-cool-taupe py-2 font-display text-base font-medium text-steel-gray transition hover:text-ink-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="/pricing-plans"
                  className="border-b border-cool-taupe py-2 font-display text-base font-medium text-steel-gray transition hover:text-ink-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="https://app.magnetlegal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md border border-cool-taupe bg-ivory-white px-5 py-3 font-display text-base font-medium text-steel-gray shadow-sm transition-colors hover:bg-cobalt-blue hover:text-ivory-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Login</span>
                </a>
                <a
                  href="https://calendly.com/magnetagents/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md border border-transparent bg-brass-gold px-5 py-3 font-display text-base font-semibold text-midnight-navy transition-colors hover:bg-brass-deep"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book a Demo</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero — "The Confident Line": one thesis sentence, one quiet CTA, real negative space, nothing else. See DESIGN.md. */}
        <section className="relative bg-ivory-white py-28 sm:py-36 lg:py-40">
          <div className="hero-entrance mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mx-auto max-w-[1020px] font-display font-extrabold tracking-[-0.035em] leading-[1.1] text-ink-black text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem]">
              AI-native business development
              <br />
              for restless lawyers
            </h1>
            <p className="mx-auto mt-6 max-w-[1100px] font-display text-2xl leading-relaxed text-steel-gray sm:text-3xl xl:whitespace-nowrap">
              A more elegant workflow for building relationships that matter.
            </p>
            <div className="mt-12">
              <a
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-cobalt-blue px-7 py-3.5 font-display text-base font-medium text-ivory-white shadow-[0_4px_20px_rgba(58,110,165,0.35)] transition hover:brightness-110"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Used by lawyers at — the page's navy accent band. The one proof signal that actually
            lands with this ICP (peer-firm pedigree); partner logos and press mentions were cut
            since they diluted it without adding real credibility for this audience. */}

        <section
          className="pb-10 pt-6 shadow-card-dark sm:pb-12 sm:pt-8"
          style={{
            background:
              "linear-gradient(105deg, rgba(58, 110, 165, 0) 0%, rgba(58, 110, 165, 0.25) 40%, rgba(58, 110, 165, 0.25) 60%, rgba(58, 110, 165, 0) 100%), linear-gradient(180deg, #263a52 0%, #1c2b3d 100%)",
          }}
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="font-plex text-xs uppercase tracking-[0.2em] text-ivory-white/60">
                Used by lawyers at
              </span>
              <div className="mt-5 flex flex-col items-center gap-3">
                {trustedFirmRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                  >
                    {row.map((firm, i) => (
                      <Fragment key={firm}>
                        <span className="font-display text-sm font-medium text-ivory-white/90">
                          {firm}
                        </span>
                        {i < row.length - 1 && (
                          <span
                            className="h-1 w-1 shrink-0 rounded-full bg-brass-gold"
                            aria-hidden="true"
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition — a secondary hero moment: one large standalone statement,
            no supporting paragraph, mirroring the restraint of the real hero above. */}
        <section className="bg-ivory-white pb-24 pt-[152px] sm:pb-32 sm:pt-[192px]">
          <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-black sm:text-4xl lg:text-5xl">
              The best business development
              <br />
              doesn't feel like business development.
            </h2>
          </div>
        </section>

        {/* Who / What / When */}
        <section id="how-it-works" className="bg-ivory-white py-24 sm:py-28">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-cobalt-blue">
                How it works
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-black sm:text-3xl">
                The right person. The right moment. The right words.
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card">
                <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brass-ink">
                  Who
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Search by description
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Describe who you're looking for, and AI agents search for
                      real people who match — not just your existing contacts.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Warm-contact memory
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Every contact keeps its own history — prior relationship,
                      past conversations, and context, all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card">
                <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brass-ink">
                  When
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Market signal tracking
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Intel surfaces real-world signals — news, market moves —
                      that make right now the right time to reach out.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Communication cadence
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Timing also accounts for when you last reached out, so no
                      relationship goes quiet by accident.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card">
                <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brass-ink">
                  What
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Voice, backed by BD craft
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Drafts blend your own voice with proven outreach and
                      business-development best practices.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-black">
                      Tailored to them
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                      Content reflects the relationship's history and what would
                      specifically interest the person you're reaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ICP Testimonials — real content loaded. Per DESIGN.md's page plan (item 4). */}
        <section className="bg-ivory-white py-24 sm:py-28">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-cobalt-blue">
                Testimonials
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-black sm:text-3xl">
                From fragmented effort to intentional growth.
              </h2>
            </div>

            <div className="mt-16 flex flex-col gap-6">
              <div className="flex flex-col rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card sm:h-80 sm:justify-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-midnight-navy/[0.06] p-4 text-center sm:h-56 sm:w-64 sm:flex-shrink-0">
                    <img
                      src="/testimonials/maximilian-viski-hanka.jpeg"
                      alt="Maximilian Viski-Hanka"
                      className="h-24 w-24 flex-shrink-0 rounded-full border border-cool-taupe object-cover"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-ink-black">
                        Maximilian Viski-Hanka
                      </p>
                      <p className="font-plex text-xs text-steel-gray">
                        Investment Funds Partner, DLA Piper
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 font-display text-base leading-relaxed text-ink-black">
                    <p>
                      “Using Magnet helped me make partner because it showed the
                      firm that I was willing to take an outside-the-box
                      approach to BD.
                    </p>
                    <p>
                      I spend significantly more money going out to dinners than
                      I do on Magnet, but I have way more firepower because of
                      it.
                    </p>
                    <p>
                      AI is hot right now, but Magnet uses it in the right way.
                      It functions like a personal pocket networker. It's the
                      best tool I've used.”
                    </p>
                  </div>
                </div>
              </div>
              {/* Jesse Jenike-Godshalk card — hidden temporarily, firm has not yet given consent.
                  Restore by uncommenting; content and photo untouched below.
              <div className="flex flex-col rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card sm:h-80 sm:justify-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-midnight-navy/[0.06] p-4 text-center sm:h-56 sm:w-64 sm:flex-shrink-0">
                    <img
                      src="/testimonials/jesse-jenike-godshalk.jpeg"
                      alt="Jesse Jenike-Godshalk"
                      className="h-24 w-24 flex-shrink-0 rounded-full border border-cool-taupe object-cover"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-ink-black">Jesse Jenike-Godshalk</p>
                      <p className="font-plex text-xs text-steel-gray">IP Litigation Partner, Mid-Size Law Firm</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 font-display text-base leading-relaxed text-ink-black">
                    <p>“With Magnet, I'm more in control of how I'm building my practice and who I'm pursuing from the get-go, rather than just accepting whatever connections the world throws at me.</p>
                    <p>It gets me past the hurdle of figuring out where to start, makes my outreach more effective, and gives me a higher return on my time.</p>
                    <p>I feel a lot happier and contented with my BD process now.”</p>
                  </div>
                </div>
              </div>
              */}
              <div className="flex flex-col rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card sm:h-80 sm:justify-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-midnight-navy/[0.06] p-4 text-center sm:h-56 sm:w-64 sm:flex-shrink-0">
                    <img
                      src="/testimonials/jonathan-joannides.jpeg"
                      alt="Jonathan Joannides"
                      className="h-24 w-24 flex-shrink-0 rounded-full border border-cool-taupe object-cover"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-ink-black">
                        Jonathan Joannides
                      </p>
                      <p className="font-plex text-xs text-steel-gray">
                        AI, IP, Privacy, and Cybersecurity Lawyer at Digital
                        Frontier Law, APC
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 font-display text-base leading-relaxed text-ink-black">
                    <p>
                      “Having supported startups and growing businesses at
                      Wilson Sonsini and Fenwick, I know how dynamic client
                      development can be. Now that I've launched my own Silicon
                      Valley firm, MagNet Agents has become a core part of how
                      we identify future clients. It simplifies research,
                      streamlines outreach, and keeps everything organized in an
                      elegant, intuitive way. MagNet Agents is now a key driver
                      in our business development workflow.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card sm:h-80 sm:justify-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-midnight-navy/[0.06] p-4 text-center sm:h-56 sm:w-64 sm:flex-shrink-0">
                    <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-midnight-navy">
                      <span className="font-display text-base font-bold text-ivory-white">
                        TG
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-ink-black">
                        Timothy Gladden
                      </p>
                      <p className="font-plex text-xs text-steel-gray">
                        Partner, RPCK Rastegar Panchal
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 font-display text-base leading-relaxed text-ink-black">
                    <p>“Magnet has been a game-changer.</p>
                    <p>
                      I'm adding contacts I meet at events directly into MagNet,
                      adding notes and having its AI suggest the next outreach
                      steps. Everything—leads, suggestions, follow-ups—is in one
                      place, so I can easily track contacts and stay on top of
                      my BD for the first time ever.
                    </p>
                    <p>
                      Having it all on one platform makes business development
                      much easier.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* Quick Start — the closing moment. Built to feel like the easiest possible next step,
            per DESIGN.md: no onboarding steps shown, just tone and design that make starting
            feel light. CTA matches the hero's quiet brass-tinted outline treatment (dark-surface
            variant) — the solid brass-cta-with-shimmer was tried here too and rejected as the
            wrong vibe, same as it was for the hero; there's no "loud" CTA anywhere on this page. */}
        <section
          className="py-20 shadow-card-dark sm:py-24"
          style={{
            background:
              "linear-gradient(105deg, rgba(58, 110, 165, 0) 0%, rgba(58, 110, 165, 0.25) 40%, rgba(58, 110, 165, 0.25) 60%, rgba(58, 110, 165, 0) 100%), linear-gradient(180deg, #263a52 0%, #1c2b3d 100%)",
          }}
        >
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ivory-white sm:text-2xl lg:text-3xl">
              Save time. Reduce mental load. Build better relationships.
            </h2>
            <div className="mt-10 flex justify-center">
              <a
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;

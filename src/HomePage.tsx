import { Check } from "lucide-react";
import { Fragment, useEffect } from "react";
import { individualFeatureGroups } from "./pricingData";

// Jesse Jenike-Godshalk is real content, kept out of the rendered array (not
// commented-out JSX) until the firm gives consent to publish it — restore by
// moving this object into `testimonials` below.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jesseJenikeGodshalkTestimonial = {
  name: "Jesse Jenike-Godshalk",
  title: "IP Litigation Partner, Mid-Size Law Firm",
  photo: "/testimonials/jesse-jenike-godshalk.jpeg",
  quote: [
    "“With Magnet, I'm more in control of how I'm building my practice and who I'm pursuing from the get-go, rather than just accepting whatever connections the world throws at me.",
    "It gets me past the hurdle of figuring out where to start, makes my outreach more effective, and gives me a higher return on my time.",
    "I feel a lot happier and contented with my BD process now.”",
  ],
};

const testimonials = [
  {
    name: "Maximilian Viski-Hanka",
    title: "Investment Funds Partner, DLA Piper",
    photo: "/testimonials/maximilian-viski-hanka.jpeg",
    quote: [
      "“Using Magnet helped me make partner because it showed the firm that I was willing to take an outside-the-box approach to BD.",
      "I spend significantly more money going out to dinners than I do on Magnet, but I have way more firepower because of it.",
      "AI is hot right now, but Magnet uses it in the right way. It functions like a personal pocket networker. It's the best tool I've used.”",
    ],
  },
  {
    name: "Jonathan Joannides",
    title:
      "AI, IP, Privacy, and Cybersecurity Lawyer at Digital Frontier Law, APC",
    photo: "/testimonials/jonathan-joannides.jpeg",
    quote: [
      "“Having supported startups and growing businesses at Wilson Sonsini and Fenwick, I know how dynamic client development can be. Now that I've launched my own Silicon Valley firm, Magnet has become a core part of how we identify future clients. It simplifies research, streamlines outreach, and keeps everything organized in an elegant, intuitive way. Magnet is now a key driver in our business development workflow.”",
    ],
  },
  {
    name: "Timothy Gladden",
    title: "Partner, RPCK Rastegar Panchal",
    initials: "TG",
    quote: [
      "“Magnet has been a game-changer.",
      "I'm adding contacts I meet at events directly into MagNet, adding notes and having its AI suggest the next outreach steps. Everything—leads, suggestions, follow-ups—is in one place, so I can easily track contacts and stay on top of my BD for the first time ever.",
      "Having it all on one platform makes business development much easier.”",
    ],
  },
];

const trustedFirmRows = [
  [
    "Freshfields Bruckhaus Deringer",
    "Lowenstein Sandler",
    "White & Case",
    "Reed Smith",
    "Eversheds Sutherland",
  ],
  [
    "Frankfurt Kurnit Klein & Selz",
    "DLA Piper",
    "Orrick, Herrington & Sutcliffe",
    "Akin Gump Strauss Hauer & Feld",
  ],
];

function HomePage() {
  // A link to a section here (e.g. PricingPlans' "How It Works") can arrive
  // as a full page navigation to /#how-it-works. The browser's native
  // anchor-scroll fires before this section has mounted, so it silently
  // fails — scroll to the hash ourselves once we're actually rendered.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    target?.scrollIntoView();
  }, []);

  return (
    <>
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
              href="/pricing-plans"
              className="inline-flex items-center justify-center rounded-md bg-cobalt-blue px-7 py-3.5 font-display text-base font-medium text-ivory-white shadow-[0_4px_20px_rgba(58,110,165,0.35)] transition hover:brightness-110"
            >
              Get started
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
                    New client discovery
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    Describe your ideal client once. AI agents find people and
                    events that match.
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-black">
                    Warm relationship memory
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    Keeps past conversations and relationship context in one
                    place.
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
                    Signal tracking
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    News, market developments and other opportunities that give
                    you a timely reason to reach out.
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-black">
                    Communication cadence
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    Suggests best outreach time, with a dashboard to track
                    overall progress.
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
                    Your voice backed by BD craft
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    Drafts blend your own voice with BD best practices.
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-black">
                    Context-aware messaging
                  </p>
                  <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                    Reflects the relationship's history and what would interest
                    the person you're reaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full feature list — reuses individualFeatureGroups from PricingPlans.tsx
            so the homepage and pricing page never drift on feature names/wording.
            The subtle navy-tinted ground (same low-opacity technique as the
            testimonial profile subcards) separates this from Who/When/What
            above, while staying the same system. */}
      <section className="bg-midnight-navy/[0.03] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-cobalt-blue">
              Features
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-black sm:text-3xl">
              A complete system for building your book of business.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {individualFeatureGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card"
              >
                <p className="font-display text-base font-bold text-ink-black">
                  {group.category}
                </p>
                <div className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-cobalt-blue" />
                      <div>
                        <p className="font-display text-sm font-bold text-ink-black">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="mt-1 font-display text-sm leading-relaxed text-steel-gray">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-xl border border-cool-taupe bg-paper-white p-8 shadow-card sm:h-80 sm:justify-center"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-midnight-navy/[0.06] p-4 text-center sm:h-56 sm:w-64 sm:flex-shrink-0">
                    {testimonial.photo ? (
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="h-24 w-24 flex-shrink-0 rounded-full border border-cool-taupe object-cover"
                      />
                    ) : (
                      <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-midnight-navy">
                        <span className="font-display text-base font-bold text-ivory-white">
                          {testimonial.initials}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-display text-sm font-bold text-ink-black">
                        {testimonial.name}
                      </p>
                      <p className="font-plex text-xs text-steel-gray">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 font-display text-base leading-relaxed text-ink-black">
                    {testimonial.quote.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            Save time. Reduce mental load. Build relationships that matter.
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href="/pricing-plans"
              className="inline-flex items-center justify-center rounded-md bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

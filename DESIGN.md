# DESIGN.md (magNetLanding)

**Status: pre-build direction.** This is being written *before* the page, by design — normally a design system gets documented from a shipped build, but this one is meant to steer the build instead. Treat it as a living draft: sections marked `OPEN` still need a decision, and the rest should be revised the moment the real build contradicts it.

## Overview

- This is the Persuade surface (magnetlegal.co), one half of one brand shared with the Operate surface (`magnet-app-front`, the logged-in product). It extends that product's tokens rather than forking them — same hex values, same type roles — but takes more visual license, because a marketing page earning attention is a different job than a dashboard staying out of the way.
- Target feel: **premium, at a Mercedes level of polish**, for an ICP of motivated Big Law corporate lawyers — restrained confidence, not flash.
- Reference world: **Superhuman.com**, heavily simplified. Superhuman's live site is a 13-section, multi-product page (three-product hero, video carousels, a 12-card icon feature grid, screenshot-heavy product deep-dives). MagNet has one nascent product and no screenshot/video library yet, so the borrow is the *register* — confident whitespace, large decisive type, sparse copy — not the section count or density.
- Content stance: **lead with vision and feeling, not literal feature demonstration.** The product's specific capabilities are still early; where a feature is described practically, keep it honest and modest rather than overstating maturity.

## Colors

Extends `magnet-app-front/tailwind.config.js` exactly — no new hex values, no forked palette.

- **Ground:** Ivory White `#FDFDFD` / Paper White `#FFFFFF`, same as the product. **Never a full dark or navy background.** The product's own DESIGN.md already treats Midnight Navy as "furniture" — the sidebar, one priority band — and states it's never used as text on the ivory ground. The current magnetlegal.co site's flat navy hero is off that system, not a considered choice; this replaces it with navy/brass reserved for accent bands and strips, the way the product actually uses them, just at marketing scale.
- **Brass:** the product's rule is "brass belongs to exactly one control per screen." Starting point here is **two moments** — the primary CTA, and a separate proof/testimonial accent — because a longer scroll needs more than one point of warmth to hold. Not a locked rule the way it is on the product; revisit the count once the built page makes it easy to judge by eye rather than in the abstract.
- **Cobalt:** stays the taxonomy/kicker color, unchanged — eyebrow labels, tags.
- **Navy (Band Top → Band Bottom):** the dramatic accent band(s), not the ground. Two bands on this page — "Used by lawyers at" and Quick Start. Both use the product's exact `PriorityBand` surface (`priority-band.tsx`), not a plain two-stop gradient: `linear-gradient(105deg, transparent 28%, rgba(58,110,165,0.13) 50%, transparent 72%), linear-gradient(180deg, #263a52 0%, #1c2b3d 100%)` — the vertical navy gradient plus a diagonal cobalt sheen raked across it, which is what keeps a large dark block from reading flat.

## Typography

- **Display (headlines):** Public Sans, stretched further than the product ever does — weight 800, tracking ‑0.035em, sizes ~2.3rem–3.4rem. Locked via a side-by-side comparison against two alternatives (a distinct grotesque, a serif); Public Sans stretched won on the strength of full brand continuity.
- **Body:** Public Sans 400, same as product.
- **Label** (uppercase, tracked kickers/eyebrows): Public Sans 500, 0.2em tracking — same rung as the product's Label hierarchy.
- **Meta** (tags, timestamps, testimonial attribution, provenance): IBM Plex Sans 400/500, same as product.
- **Mono:** IBM Plex Mono, reserved for fixed-width figures only, matching the product's rule that it is "used almost nowhere." A pure marketing page likely has no legitimate use for it at all — don't reach for it to look technical.

## Layout

- Airier, more generous rhythm than the product's Operate-mode density — the most consistently borrowed Superhuman trait, even at a fraction of their page length.
- **Content width ~1200px, vertical section padding ~120–160px on desktop.** This is a standard range for premium SaaS marketing pages in this register (Stripe, Linear, and Superhuman itself all sit in roughly this band) — confirmed as the default rather than a MagNet-specific invention.

## Components

### Buttons

The one button type on the page so far — the "Get started" CTA (hero and Quick Start), shared shape/size/font but a fill that now diverges per instance:

- **Shape:** `rounded-md` (8px corners).
- **Size:** `px-5 py-2.5` (20px horizontal / 10px vertical padding), no fixed height.
- **Font:** Public Sans (`font-display`), 14px (`text-sm`), weight 500 (`font-medium`).
- **Fill — Quick Start:** Brass Gold `#E8C56A` at rest → Brass Deep `#E0B84D` on hover. `transition-colors` only — no border, no shimmer, no scale or brightness tricks. (The full `brass-cta.tsx` shimmer treatment was tried on this page twice, hero and Quick Start, and rejected both times as the wrong vibe — there is no loud CTA anywhere on this page.)
- **Fill — Hero:** changed from Brass Gold to Cobalt Blue `#3A6EA5` (`bg-cobalt-blue`, `hover:brightness-110`), matching the nav's existing "Book a demo" button rather than inventing a new blue.
- **Text color is per-section, not fixed:** it matches the button's own surrounding background rather than one color used everywhere — Ivory White `#FDFDFD` on a light (ivory) section, Midnight Navy `#1A2E40` on a dark (navy) section. On this page: ivory-white text on the hero's CTA (light ivory section), midnight-navy text on Quick Start's (dark navy section).

## Page structure (v1)

1. **Nav — built.** Ivory ground (was flat navy through several passes; finally matched to the rest of the page), black wordmark, hairline taupe bottom border plus a soft `shadow-card` lift instead of the dark-surface embossed treatment, since it's no longer a dark surface.
2. **Headline (hero) — "The Confident Line."** Chosen from a real structural round (`impeccable concept-seed --scope surface`, three genuinely different compositions dealt, not hand-picked) over an asymmetric navy/brass split and an oversized run-on headline. The hero is deliberately near-empty: real negative space, no kicker, no navy, no logos, nothing else competing for the first look. This is the restraint move that separates a premium brand from a generic SaaS template (the closest reference is the legendary early-Superhuman waitlist page); the risk is that it reads as unfinished rather than deliberate if the type weight and vertical rhythm aren't held exactly right.
   - **Copy, updated:** the original round called for exactly one line of thesis copy and nothing else. On explicit request, a secondary line was added beneath the headline (steel-gray, smaller, one short sentence). This is a real step back from the "one line only" restraint the direction was chosen for — still far quieter than a conventional hero, but no longer the maximal version of the idea.
   - **CTA:** see Components → Buttons below for the settled spec (went through several rejected passes — full shimmer, then a tinted outline — before landing there).
3. **Value Proposition — a secondary hero.** One standalone line ("The best business development doesn't feel like business development."), no supporting paragraph — a second large-type moment mirroring the hero's own restraint, rather than a headline-plus-explainer pattern used nowhere else on the page. A supporting sentence was tried and cut: it duplicated the What card below (drafting in your voice) and drifted from the real mechanism (said "researching people already in your orbit," when the actual differentiator is searching *beyond* your existing contacts); the one non-redundant idea it carried (effortless, no added task) is already covered by the Quick Start headline, so nothing was lost by cutting it outright.
4. **Features / Benefits — "Who / When / What."** Built: three cards under the headline "The right person. The right moment. The right words." (a cut was tried here and reverted — the headline stays). Each card is an eyebrow (Who/When/What) leading straight into two concrete feature call-outs (a bold one-line label + one-sentence description) — no separate benefit-headline layer; one was tried and cut as redundant once the feature call-outs existed. Content, per Michael directly (supersedes an earlier, partly-incorrect inference from `WeeklyWorkflowWidget.tsx` alone):
   - **Who** — search by description (AI agents search for real people matching a description you give, not just existing contacts) + warm-contact memory (every contact keeps its relationship history and past conversations).
   - **When** — market signal tracking (the app's "Intel" feature surfaces real-world news/market signals) + communication cadence (timing also factors in how long since you last reached out).
   - **What** — voice blended with BD best practices, tailored to both the relationship's history and what would specifically interest that person.
   Fills the "small number of confident statements" slot from the original plan with a structure specific to the product's actual mechanism rather than a generic feature list.
5. **ICP Testimonials — content loaded, card treatment.** Three real quotes as full-width stacked cards (`rounded-xl border border-cool-taupe bg-paper-white shadow-card`, locked height at `sm:` and up so the three read as consistent regardless of quote length): Maximilian Viski-Hanka (Investment Funds Partner, DLA Piper), Jesse Jenike-Godshalk (IP Litigation Partner, Thompson Hine), Timothy Gladden (Partner, RPCK Rastegar Panchal). Each card has a left "profile subcard" (tinted `bg-midnight-navy/[0.06]` panel, locked height, 96px avatar) and opening/closing curly quotes bracketing the whole testimonial rather than a decorative quote-mark glyph (tried and rejected). The old "What Our Customers Say" section further down the page — which duplicated the Timothy Gladden quote — has been removed entirely; no more duplication to flag.
6. **Quick Start (closing CTA) — built.** Replaced both the old 3-step "Get Started with MagNet Today" section (cut entirely — it re-explained Who/What/When in different words and made onboarding mechanics visible, exactly what this slot is meant to avoid) and "Ready to transform your client acquisition?". Navy band, one line ("Save time. Reduce mental load. Build better relationships."), no subhead. CTA follows the Buttons spec above. The shimmer CSS has been removed from `index.css` entirely, not just left unused.
7. **Footer** — unchanged from the current site's structure unless asked.

## Motion

**One signature moment for v1: an orchestrated hero entrance.** On load, the kicker, headline, subhead, and CTA stagger in with a short rise-and-fade (roughly 600–800ms total, each element offset slightly from the last) — the classic premium-SaaS cue (Superhuman, Linear, Stripe all use a version of this), and cheap to build well since it needs no imagery or product assets.

Rules, so this stays a signature moment and doesn't become scattered decoration:

- **This is the only orchestrated animation on the page for v1.** No scroll-triggered reveals, no hover flourishes, no parallax elsewhere — one motion moment, not several.
- **Never parked at `opacity: 0` waiting on a scroll observer or a slow asset.** The entrance must resolve on its own within roughly a second of load, and the page must read correctly as a static screenshot the instant after — nothing left invisible if the animation fails to fire.
- **Respect `prefers-reduced-motion`**: fall back to the resting state with no animation, not a snap-in.
- Once there's a real product demo worth animating (post feature-finalization, alongside the imagery revisit above), reconsider whether a second moment — e.g. a scroll-triggered reveal of that demo — earns its place. Not before.

## Imagery

**Typographic/abstract for v1** — no illustration, no photography, no product screenshots. The hero and every section carry themselves on type, the navy accent band(s), and layout alone. Chosen because it's the only option actually executable end-to-end right now: no image-generation tool is available this session, and there's no capability here to commission illustration or license/shoot photography.

Revisit once the product's features are finalized: the plan from there is imagery built *from the actual product* (real UI, real mechanism) rather than stock or generic illustration — consistent with "prove, don't claim" and with not fabricating a product that doesn't exist yet. Until then, don't reach for a placeholder screenshot, gradient blob, or generic icon tile to fill the gap — quiet type and layout is the honest choice, not a stand-in for a missing asset.

## Do's and Don'ts

- **Do** treat this file as extending `magnet-app-front/DESIGN.md`'s tokens, not replacing them.
- **Do** keep navy and brass as accents, never as a page ground.
- **Don't** reach for IBM Plex Mono to look technical — it's for fixed-width figures only, on either surface.
- **Don't** fabricate testimonials, customer counts, or feature claims to fill out a section. Placeholder content in mockups must stay labeled as such.
- **Don't** replicate Superhuman's section count or density — the reference is register, not scale.

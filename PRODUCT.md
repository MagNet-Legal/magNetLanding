# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are individual partners and senior associates at large ("big") law firms, acting on their own behalf to build their personal book of business — not firm-wide business-development or marketing teams managing outreach for multiple attorneys.

## Product Purpose

MagNet gives individual lawyers AI agents and an AI-native CRM to find, research, and reach new clients, automating prospecting and outreach so the lawyer can spend more time on billable work and case preparation.

## Positioning

An AI-native CRM and set of AI agents built around how one individual lawyer develops their own business — not a generic sales/SDR tool or team-oriented CRM repurposed for law firms. A competitor building for firm-wide sales/BD teams could not truthfully claim the same personal, AI-native workflow centered on a single attorney's own client acquisition.

## Operating Context

- Public marketing site at magnetlegal.co (this repo, `magNetLanding`) and the logged-in product at app.magnetlegal.co (`magnet-app-front`) are two halves of the same experience, on the same brand, deployed separately.
- AI-agent-driven prospecting and lead research.
- Client/lead tracking and outreach management.
- Contact enrichment via Apollo.io.
- Email/calendar integration via Microsoft Graph (MSAL).
- Subscription billing via Stripe checkout.
- Auth via Supabase.
- A "Client Match" signup flow exists on the marketing site (`ClientMatch.tsx`) inviting sign-ups for a client-matching service; the mechanism behind it isn't documented in this repo — treat as evidence of an offering, not an invented feature description.

## Capabilities and Constraints

- AI research/enrichment, lead scoring, and outreach logic live in the backend API (api.magnetlegal.co). `magnet-app-front` is frontend-only and calls it with a bearer token; `magNetLanding` is a static marketing site with no backend logic of its own.
- No bar-association advertising or compliance constraints beyond what's already reflected in the site's existing Privacy Policy and Terms of Service pages — none disclosed beyond that.

## Brand Commitments

- Product/brand name: "MagNet" (site nav/footer wordmark), also referred to as "MagNet Agents" in on-page copy (e.g. hero section, ClientMatch page header). Existing usage is inconsistent between the two forms; not treated as a resolved naming rule, just current evidence.
- Existing logo assets: `magnet-logo-black.png` / `magnet-logo-white.png` (shared across both repos).
- NVIDIA Inception Program badge is displayed on the site — an existing affiliation to preserve, not to characterize beyond what the badge itself claims.

## Evidence on Hand

- Real customer testimonial on the homepage from a named practicing attorney (AI, IP, Privacy, and Cybersecurity Lawyer at Digital Frontier Law, APC).
- Legal-tech press logos displayed on the site (Artificial Lawyer, Legal-Tech Blog, Legalverse Media, LeadWise, Clio, Law.com) as existing press-mention evidence.
- No pricing, benchmark, or customer-count claims beyond what's already live on `PricingPlans.tsx` and the homepage — do not fabricate additional claims.

## Product Principles

- Built for one lawyer's personal client-acquisition workflow, not a team/firm sales floor — every design and copy decision should read as personal and AI-native, not generic B2B SaaS CRM.
- The marketing site (Persuade) and the product (Operate) are one brand experience across two repos; visual and tonal consistency between them is a first-class requirement, not a nice-to-have.
- Preserve existing factual claims, testimonials, and press evidence as-is; do not invent new customers, numbers, or claims during redesign work.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond standard web accessibility practice.

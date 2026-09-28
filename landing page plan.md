landing page plan

- removing Get Started impact our B2C perception? have both options? or have book demo as an option within the sign up screen?
- content (press/case studies/webinars/ LInkedin posts)
- law.com, artificial lawyer, legal tech hub under Testimonials
- other content
- Quick start: determine whether "build better relationships" should more explicitly evoke revenue
- computer and MObile layouts


Laura
- dont like the yellow button
- dont like white space
- find original quotes; Jesse said no quotes or firm name
- remove Thompson Hine, Cahill; swap lowenstein and white



testimonial copy


1
“Using Magnet helped me make partner because it showed the firm that I was willing to take an outside-the-box approach to BD. 

I spend significantly more money going out to dinners than I do on Magnet, but I have way more firepower because of it. 

AI is hot right now, but Magnet uses it in the right way. It functions like a personal pocket networker. It’s the best tool I’ve used.”
Maximilian Viski-Hanka
Investment Funds Partner, DLA Piper  

2

“With Magnet, I’m more in control of how I'm building my practice and who I’m pursuing from the get-go, rather than just accepting whatever connections the world throws at me. It gets me past the hurdle of figuring out where to start, makes my outreach more effective, and gives me a higher return on my time.

I feel a lot happier and contented with my BD process now.”

Jesse Jenike-Godshalk
IP Litigation Partner, Thompson Hine


3

"I've added MagNet to my business development routine and it's been a game-changer. I'm adding contacts I meet at events directly into MagNet, adding notes and having its AI suggest the next outreach steps. Everything – leads, suggestions, follow-ups – is in one place, so I can easily track contacts and stay on top of my BD for the first time ever. Having it all on one platform makes business development much easier."

Timothy Gladden
Partner, RPCK Rastegar Panchal


how it works copy



later
- check law firm partner logo use
- determine waht to do with the "partnered with" and "as featured in" sections
- not the biggest fan of the Tim quote, "adding magnet" doesn't make magnet feel like a system, or rather the double "add" is not great.
- update pricing plan
- create graphics
- update and bring back press
- add case studies/articles/webinars (ie all content)
- bring back newsletter





Superhuman Sign up Flow

Pricing -> Sign up -> Choose Plan/ BIlling/Review and purchase
Try Go -> sign up -> walktrhough of features -> Choose Plan
Get MAil -> Sign up -> Choose Plan


Full trace, from magNetLanding/PricingPlans.tsx through to the dashboard:

0. Landing Pricing

1. Marketing site (magNetLanding)
User picks a plan card, clicks "Get Started" → handlePurchase() (PricingPlans.tsx:142-144) does a hard redirect to https://app.magnetlegal.co/auth. No plan, billing period, or price is passed — every card's button goes to the exact same URL.

2. /auth (magnet-app-front, Auth.tsx)
User fills the sign-up form. On submit (onSubmit, line 75): supabase.auth.signUp() fires, then navigate("/auth/confirm-signup", { state: { email, hasReferral, referralCode } }) — only email/referral data travels forward, still nothing about a plan (there was never a plan to carry, per step 1).

3. /auth/confirm-signup (ConfirmSignup.tsx)
Waits for email confirmation, then handleSuccessfulAuth checks for an existing user_profiles row:
- Has profile → navigate("/"), straight to dashboard.
- No profile → branches on hasReferral: → /auth/discount-selection (referred) or /auth/plan-selection (not referred), both carrying { email, hasReferral, referralCode }.

4. Plan choice — /auth/plan-selection or /auth/discount-selection
This is where the user picks a plan for the first and only time the system actually records — both screens independently re-render the full plan list from stripe-config.ts (this is the canonical source; unrelated to the marketing site's separate copy). Whichever is picked calls createCheckoutSession({ price_id }), which hits the Supabase Edge Function stripe-checkout, which calls Stripe's real API (checkout.sessions.create, passing price_id straight through as the line item — this is what actually determines the charge). The browser is redirected to Stripe's hosted checkout, with success_url set to /onboarding?plan=<priceId>.

5. /onboarding (Onboarding.tsx)
Reads plan back out of the URL query string, looks it up again in stripe-config.ts to display/confirm it, walks the user through setup, then navigate("/") on completion.

6. Dashboard (/)

Two things worth flagging as a result of this trace:
- There's a second, parallel checkout path — the in-app Pricing.tsx (route /pricing, for already-logged-in users upgrading) — whose success_url goes to /success instead of /onboarding, a completely separate destination screen from the signup path's.
- Confirms exactly the gap discussed earlier: the plan a visitor picks on the marketing page is discarded at step 1 and re-chosen from scratch at step 4 — two unconnected "pick a plan" moments in one funnel.


Features



Original:
5 matched Leads per day
Daily market intel reports & LinkedIn Post Suggestion
Advanced event discovery (niche & invite-only)
Coming soon: Competitor intel reports & Lead sharing
Unlimited Lead Uploads & enrich with AI
Unlimited AI-assisted Outreach Strategy Steps & Messaging
Advanced analytics & ROI tracking
Exportable reports
Coming soon: Team-wide visibility
Priority email support + quarterly check-ins
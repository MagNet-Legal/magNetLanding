import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Menu, X } from "lucide-react";
import { individualFeatureGroups } from "./pricingData";

// --- UI Component Definitions (in-file) ---
// NOTE: These are simplified versions for demonstration.
// In a real app, these would be in separate files, likely using a UI library.

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { highlighted?: boolean }
> = ({ className, children, highlighted, ...props }) => (
  <div
    className={`flex w-full max-w-sm flex-col rounded-xl border bg-paper-white p-8 shadow-card ${highlighted ? "border-cobalt-blue/40 ring-1 ring-cobalt-blue/40" : "border-cool-taupe"} ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={`text-center ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={`font-display text-lg font-bold text-ink-black ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={`flex-grow flex flex-col justify-between ${className}`}
    {...props}
  >
    {children}
  </div>
);

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={`w-full inline-flex items-center justify-center rounded-md px-6 py-3 font-display text-sm font-semibold transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

// --- Product Configuration (in-file) ---

const products = [
  {
    name: "Team",
    alwaysVisible: true,
    description:
      "For teams and firms interested in bringing Magnet to multiple lawyers.",
  },
  {
    priceId: "price_1S5TGrAl20PLMb1WXedFWU80",
    name: "MagNet Starter – Monthly",
    price: 5900, // $59.00 in cents
    currency: "usd",

    billingPeriod: "monthly",
    features: [
      "5 matched Leads per week",
      "Weekly market intel reports & LinkedIn Post Suggestion",
      "Basic event discovery",
      "Unlimited Lead Uploads & enrich with AI",
      "Unlimited AI-assisted Outreach Strategy Steps & Messaging",
      "Basic BD tracking dashboard",
      "Email support",
    ],
  },
  {
    priceId: "price_1S5THKAl20PLMb1WqaIdBLQ1",
    name: "Individual",
    price: 24900, // $259.00 in cents

    currency: "usd",
    billingPeriod: "monthly",
    featureGroups: individualFeatureGroups,
  },
  {
    priceId: "price_1UJc3jAl20PLMb1WDM4Kw42n",
    name: "Founder Advisory",
    price: 100000, // $1,000.00 in cents
    currency: "usd",
    billingPeriod: "monthly",
    featuresIntro: "Everything in Individual, plus:",
    features: [
      "4 one-hour sessions per month with co-founder and CEO, Laura Bingenheimer",
    ],
  },
  {
    priceId: "price_1S5srbAl20PLMb1W1nyB41LP",
    name: "MagNet Starter – Annual",
    price: 56600, // $566.00 in cents
    billingPeriod: "annual",
    currency: "usd",
    features: [
      "5 matched Leads per week",
      "Weekly market intel reports & LinkedIn Post Suggestion",
      "Basic event discovery",
      "Unlimited Lead Uploads & enrich with AI",
      "Unlimited AI-assisted Outreach Strategy Steps & Messaging",
      "Basic BD tracking dashboard",
      "Email support",
    ],
  },
  {
    priceId: "price_1S5soIAl20PLMb1WYqUYmTk3",
    name: "Individual",
    price: 239000, // $2390.00 in cents
    billingPeriod: "annual",
    currency: "usd",
    featureGroups: individualFeatureGroups,
  },
  {
    priceId: "price_1UJd1NAl20PLMb1Wxl08l153",
    name: "Founder Advisory",
    price: 960000, // $9,600.00 in cents
    currency: "usd",
    billingPeriod: "annual",
    featuresIntro: "Everything in Individual, plus:",
    features: [
      "4 one-hour sessions per month with co-founder and CEO, Laura Bingenheimer",
    ],
  },
];

// --- Main Pricing Component ---

function PricingPlans() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );
  const handlePurchase = (product: (typeof products)[number]) => {
    window.location.href = `https://app.magnetlegal.co/auth?mode=signup&plan=${product.priceId}`;
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 0,
    }).format(price / 100);
  };

  // Filter products based on billing period. Starter is hidden for now —
  // still a real product in the data below, just not shown on this page.
  // Team has no billing period at all (it's not a real Stripe product), so
  // it renders regardless of the Monthly/Annual toggle.
  const filteredProducts = products
    .filter(
      (product) =>
        product.alwaysVisible || product.billingPeriod === billingPeriod,
    )
    .filter((product) => !product.name.includes("Starter"));

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-ivory-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Navigation — identical to HomePage's, since there is no shared Nav component yet. */}
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
              className="flex items-center justify-center rounded-md border border-transparent bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
            >
              <span>Book a Demo</span>
            </a>
          </div>

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

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
        >
          <div className="space-y-4 border-t border-cool-taupe bg-ivory-white px-4 pb-4 pt-2">
            <div className="flex flex-col space-y-3">
              <a
                href="/#how-it-works"
                className="border-b border-cool-taupe py-2 font-display text-base font-medium text-steel-gray transition hover:text-ink-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <Link
                to="/pricing-plans"
                className="border-b border-cool-taupe py-2 font-display text-base font-medium text-steel-gray transition hover:text-ink-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>

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

      <main className="flex-1 pb-12 pt-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-[1.8rem] text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-black sm:text-4xl">
              Choose Your Plan
            </h1>

            {/* Billing Period Toggle */}
            <div className="mt-16 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-cool-taupe bg-paper-white p-1 shadow-card">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`flex h-8 items-center justify-center rounded-full px-5 font-display text-sm font-normal transition-colors ${
                    billingPeriod === "monthly"
                      ? "bg-cobalt-blue text-ivory-white"
                      : "text-ink-black"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("annual")}
                  className={`flex h-8 w-40 items-center rounded-full px-4 font-display text-sm font-normal transition-colors ${
                    billingPeriod === "annual"
                      ? "bg-cobalt-blue text-ivory-white"
                      : "text-ink-black"
                  }`}
                >
                  Annual
                  <span className="mx-auto translate-x-[7px] rounded-full bg-green-100 px-2 py-0.5 font-display text-xs font-semibold text-green-700">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8">
            {filteredProducts.map((product) => {
              // Team is sales-assisted, not a real Stripe product — no price,
              // no checkout, just a description and a Contact Us link.
              if (!product.priceId) {
                return (
                  <Card key={product.name} className="self-start">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mt-4 font-plex text-sm leading-relaxed text-ink-black">
                        {product.description}
                      </p>
                      <a
                        href={`mailto:contact@magnetlegal.co?subject=${encodeURIComponent(
                          "Inquiry (Pricing)",
                        )}&body=${encodeURIComponent(
                          "Hi,\n\nI’m interested in the Team plan.\n\nA few details:\n- Scope: team / practice group / firmwide\n- Approximate number of lawyers:\n- Firm name:\n\nThanks!",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-cobalt-blue px-6 py-3 font-display text-sm font-semibold text-cobalt-blue transition hover:bg-cobalt-blue/5"
                      >
                        Contact Us
                      </a>
                    </CardContent>
                  </Card>
                );
              }

              return (
                <Card key={product.priceId}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="mt-4 font-display text-3xl font-bold text-ink-black">
                      {formatPrice(product.price, product.currency)}
                      <span className="font-display text-sm font-normal text-steel-gray">
                        {" "}
                        / {billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <div
                      className={`mb-4 mt-1 font-plex text-sm text-steel-gray ${billingPeriod === "annual" ? "" : "invisible"}`}
                    >
                      <span className="font-medium text-cobalt-blue">
                        {formatPrice(
                          Math.round(product.price / 12),
                          product.currency,
                        )}{" "}
                        / month
                      </span>
                      <span className="ml-1 text-xs">(billed annually)</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="text-left">
                      {product.featureGroups ? (
                        <div className="space-y-4">
                          {product.featureGroups.map((group, groupIndex) => (
                            <div key={groupIndex}>
                              <p className="font-display text-base font-medium text-ink-black">
                                {group.category}
                              </p>
                              <div className="mt-3 space-y-2">
                                {group.items.map((item, itemIndex) => (
                                  <div
                                    key={itemIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt-blue" />
                                    <span className="font-plex text-sm text-ink-black">
                                      <span className="font-semibold">
                                        {item.name}
                                      </span>
                                      {item.description &&
                                        `: ${item.description}`}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          {product.featuresIntro && (
                            <p className="font-display text-base font-medium text-ink-black">
                              {product.featuresIntro}
                            </p>
                          )}
                          <div
                            className={`space-y-4 ${product.featuresIntro ? "mt-4" : ""}`}
                          >
                            {product.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt-blue" />
                                <span className="font-plex text-sm text-ink-black">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <Button
                      className={`mt-8 transition ${
                        product.name === "Founder Advisory"
                          ? "border border-cobalt-blue text-cobalt-blue hover:bg-cobalt-blue/5"
                          : "bg-cobalt-blue text-ivory-white hover:brightness-110"
                      }`}
                      onClick={() => handlePurchase(product)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mx-auto mt-[4.5rem] max-w-md rounded-xl border border-cobalt-blue/40 bg-paper-white p-6 text-center shadow-card ring-1 ring-cobalt-blue/40">
            <p className="font-display text-sm font-medium text-ink-black">
              We recommend booking a demo with our CEO.
            </p>
            <a
              href="https://calendly.com/magnetagents/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-brass-gold px-5 py-2.5 font-display text-sm font-semibold text-midnight-navy shadow-[0_2px_12px_rgba(232,197,106,0.2)] transition-colors hover:bg-brass-deep"
            >
              Book a Demo
            </a>
          </div>

          <div className="mx-auto mt-24 max-w-2xl text-center font-plex text-sm text-steel-gray">
            <p>
              Questions? Contact us at{" "}
              <a
                href="mailto:contact@magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cobalt-blue no-underline transition hover:brightness-110"
              >
                contact@magnetlegal.co
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PricingPlans;

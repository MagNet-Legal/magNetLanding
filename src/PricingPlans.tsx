import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Star, Menu, X } from "lucide-react";

// --- UI Component Definitions (in-file) ---
// NOTE: These are simplified versions for demonstration.
// In a real app, these would be in separate files, likely using a UI library.

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { popular?: boolean }
> = ({ className, children, popular, ...props }) => (
  <div
    className={`relative flex w-full max-w-sm flex-col rounded-xl border bg-paper-white p-8 shadow-card ${popular ? "border-brass-gold ring-1 ring-brass-gold" : "border-cool-taupe"} ${className}`}
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

const Badge: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={`absolute -top-3 left-1/2 -translate-x-1/2 transform ${className}`}
    {...props}
  >
    <span className="flex items-center rounded-full bg-brass-gold px-3 py-1 font-display text-xs font-semibold text-midnight-navy">
      {children}
    </span>
  </div>
);

// --- Product Configuration (in-file) ---

const products = [
  {
    priceId: "price_1S5TGrAl20PLMb1WXedFWU80",
    name: "MagNet Starter – Monthly",
    description:
      "Start building client relationships in under 30 minutes a week.",
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
    name: "MagNet Pro – Monthly",
    description: "Maximize BD efficiency and capture new clients early.",
    price: 24900, // $259.00 in cents

    currency: "usd",
    billingPeriod: "monthly",
    features: [
      "5 matched Leads per day",
      "Daily market intel reports & LinkedIn Post Suggestion",
      "Advanced event discovery (niche & invite-only)",
      "Coming soon: Competitor intel reports & Lead sharing",
      "Unlimited Lead Uploads & enrich with AI",
      "Unlimited AI-assisted Outreach Strategy Steps & Messaging",
      "Advanced analytics & ROI tracking",
      "Exportable reports",
      "Coming soon: Team-wide visibility",
      "Priority email support + quarterly check-ins",
    ],
  },
  {
    priceId: "price_1S5srbAl20PLMb1W1nyB41LP",
    name: "MagNet Starter – Annual",
    description:
      "Start building client relationships in under 30 minutes a week.",
    price: 56600, // $566.00 in cents
    betaSpecial: "Save 20%",
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
    name: "MagNet Pro – Annual",
    description: "Maximize BD efficiency and capture new clients early.",
    price: 239000, // $2390.00 in cents
    billingPeriod: "annual",
    popular: true,
    betaSpecial: "Save 20%",
    currency: "usd",
    features: [
      "5 matched Leads per day",
      "Daily market intel reports & LinkedIn Post Suggestion",
      "Advanced event discovery (niche & invite-only)",
      "Coming soon: Competitor intel reports & Lead sharing",
      "Unlimited Lead Uploads & enrich with AI",
      "Unlimited AI-assisted Outreach Strategy Steps & Messaging",
      "Advanced analytics & ROI tracking",
      "Exportable reports",
      "Coming soon: Team-wide visibility",
      "Priority email support + quarterly check-ins",
    ],
  },
];

// --- Main Pricing Component ---

function PricingPlans() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const handlePurchase = (product: (typeof products)[number]) => {
    window.location.href = `https://app.magnetlegal.co/auth?mode=signup&plan=${product.priceId}`;
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

  // Filter products based on billing period. Starter is hidden for now —
  // still a real product in the data below, just not shown on this page.
  const filteredProducts = products
    .filter((product) => product.billingPeriod === billingPeriod)
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
          <div className="mb-12 text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-black sm:text-4xl">
              Choose Your MagNet Plan
            </h1>

            {/* Billing Period Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={`font-display text-base font-medium ${billingPeriod === "monthly" ? "text-ink-black" : "text-steel-gray"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingPeriod(
                    billingPeriod === "monthly" ? "annual" : "monthly",
                  )
                }
                className="relative inline-flex h-7 w-12 items-center rounded-full bg-cobalt-blue transition-colors"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    billingPeriod === "annual"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`font-display text-base font-medium ${billingPeriod === "annual" ? "text-ink-black" : "text-steel-gray"}`}
              >
                Annual
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 font-display text-sm font-semibold text-green-700">
                Save 20%
              </span>
            </div>
          </div>

          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
            {filteredProducts.map((product) => {
              const isExpanded = expanded[product.priceId] || false;
              return (
                <Card key={product.priceId} popular={product.popular}>
                  {product.popular && (
                    <Badge>
                      <Star className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="mt-4 font-display text-3xl font-bold text-ink-black">
                      {formatPrice(product.price, product.currency)}
                      <span className="font-display text-sm font-normal text-steel-gray">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingPeriod === "annual" && (
                      <div className="mt-1 font-plex text-sm text-steel-gray">
                        <span className="font-medium text-cobalt-blue">
                          {formatPrice(
                            Math.round(product.price / 12),
                            product.currency,
                          )}
                          /month
                        </span>
                        <span className="ml-1 text-xs">(billed annually)</span>
                      </div>
                    )}
                    <p className="mt-2 font-display text-sm text-steel-gray">
                      {product.description}
                    </p>
                    {product.betaSpecial && (
                      <div className="mt-4 rounded-lg border border-brass-gold/40 bg-brass-gold/10 p-3">
                        <p className="font-display text-sm font-medium text-midnight-navy">
                          Beta User Special Pricing
                        </p>
                        <p className="mt-1 font-plex text-xs text-steel-gray">
                          {product.betaSpecial}
                        </p>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 text-left">
                      {(isExpanded
                        ? product.features
                        : product.features.slice(0, 3)
                      ).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt-blue" />
                          <span className="font-plex text-sm text-ink-black">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <button
                          className="mt-2 font-display text-xs font-medium text-cobalt-blue hover:underline focus:outline-none"
                          onClick={() =>
                            setExpanded((prev) => ({
                              ...prev,
                              [product.priceId]: !isExpanded,
                            }))
                          }
                        >
                          {isExpanded
                            ? "Show less"
                            : `Show all ${product.features.length} features`}
                        </button>
                      )}
                    </div>

                    <Button
                      className="mt-8 bg-brass-gold text-midnight-navy hover:bg-brass-deep"
                      onClick={() => handlePurchase(product)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center font-plex text-sm text-steel-gray">
            <p>Questions? Contact us at contact@magnetlegal.co.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PricingPlans;

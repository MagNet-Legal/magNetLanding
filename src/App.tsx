import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivacyPolicy";
import PricingPlans from "./PricingPlans";
import TermsOfService from "./TermsOfService";
import ClientMatch from "./ClientMatch";

function App() {
  const footer = (
    <footer className="border-t border-cool-taupe bg-ivory-white">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-[160px] sm:px-6 lg:px-8">
        <img
          src="/logos/magnet-logo-blue.png"
          alt="MagNet"
          className="mx-auto h-12 w-auto object-contain sm:h-16 lg:h-20"
        />

        <div className="mt-[140px] flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <img
            src="/nvidia-inception-program-badge-rgb-for-screen.png"
            alt="NVIDIA Inception Program"
            className="h-[56px] w-auto"
          />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
          </div>

          <a
            href="https://www.linkedin.com/company/magnet-legal-ai/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex text-xs text-steel-gray transition hover:text-ink-black"
          >
            LinkedIn
          </a>

          <p className="font-plex text-xs text-steel-gray">
            &copy; {new Date().getFullYear()} MagNet Agents. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <Router>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/client-match" element={<ClientMatch />} />
        </Routes>

        {/* Footer - Shown on home and pricing. Structure borrowed from legora.com's minimal
            single-row footer bar; tokens/type are ours (IBM Plex Sans meta role, steel-gray,
            hairline taupe border — DESIGN.md, not Legora's). */}
        <Routes>
          <Route path="/" element={footer} />
          <Route path="/pricing-plans" element={footer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

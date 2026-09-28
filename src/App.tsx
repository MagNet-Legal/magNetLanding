import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivacyPolicy";
import PricingPlans from "./PricingPlans";
import TermsOfService from "./TermsOfService";
import Layout from "./Layout";
// Archived — /client-match's "Sign Up" button is the only entry point to a
// real Microsoft Forms client-intake link, and the Privacy Policy's
// "Client Intake Form Submitters" section still documents this flow. Keep
// the file and route commented out (not deleted) in case this is reinstated.
// import ClientMatch from "./ClientMatch";
// Archived in the redesign — kept commented out (not deleted) in case
// either is reinstated.
// import Newsletter from "./Newsletter";
// import Press from "./Press";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* <Route path="/client-match" element={<ClientMatch />} /> */}
          {/* <Route path="/newsletter" element={<Newsletter />} /> */}
          {/* <Route path="/press" element={<Press />} /> */}
          {/* Any removed or mistyped path (e.g. the deleted /press, /newsletter)
              falls through to home rather than rendering a blank page. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

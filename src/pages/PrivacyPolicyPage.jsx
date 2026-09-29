import React from "react";
import { Link } from "react-router-dom";
import { 
  RiShieldCheckLine, 
  RiLockPasswordLine, 
  RiDatabase2Line, 
  RiMapPinTimeLine,
  RiArrowLeftLine,
  RiCheckDoubleFill
} from "react-icons/ri";

const PrivacyPolicyPage = () => {
  return (
    <div className="py-16 lg:py-24 bg-slate-50 dark:bg-obsidian-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen">
      <div className="container max-w-4xl">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <RiArrowLeftLine className="text-sm" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-obsidian-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <RiShieldCheckLine className="text-sm" />
            <span>VELOCE Privacy & Data Sovereignty Charter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Privacy Policy & Data Security
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Effective Date: October 1, 2026 · Last Audited: September 2026. This policy governs how VELOCE Luxury Mobility Group Inc. handles executive client itineraries, biometric identity verification, and vehicle telemetry.
          </p>
        </div>

        {/* Summary Highlights Card */}
        <div className="my-8 p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 shadow-sm space-y-3">
          <h3 className="text-sm font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <RiLockPasswordLine className="text-primary text-base" />
            <span>Our Executive Privacy Guarantees</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <RiCheckDoubleFill className="text-primary shrink-0" />
              <span>We never sell or monetize client itinerary or contact data.</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckDoubleFill className="text-primary shrink-0" />
              <span>All payment instruments are tokenized via PCI-DSS Level 1 vaults.</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckDoubleFill className="text-primary shrink-0" />
              <span>Driver identity scans are encrypted with AES-256 at rest.</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckDoubleFill className="text-primary shrink-0" />
              <span>Full compliance with GDPR (EU/UK) and CCPA/CPRA (California).</span>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>1. Information We Collect</span>
            </h2>
            <p>
              To execute white-glove vehicle handovers and guarantee exact model reservations, VELOCE collects the following minimum required information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li><strong>Contact & Identity:</strong> Full legal name, verified mobile phone number, email address, international driving permit, and government-issued passport/driver’s license.</li>
              <li><strong>Flight & Itinerary Details:</strong> Private tail number (e.g. NetJets, Flexjet, VistaJet), commercial flight number, FBO terminal coordinates (Atlantic Aviation, Signature Flight Support, Sheltair), and expected landing timestamps for synchronized curbside staging.</li>
              <li><strong>Payment & Billing Data:</strong> Encrypted payment tokens for rental authorization and optional security holds. We never store raw 16-digit credit card numbers on our infrastructure.</li>
              <li><strong>Vehicle Telemetry & Diagnostics:</strong> Real-time GPS location, odometer reading, battery/fuel status, tire pressure, and mechanical safety diagnostics during the active rental period.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>2. How We Utilize Your Data</span>
            </h2>
            <p>
              Your data is utilized strictly for the operational execution of your luxury mobility itinerary:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <RiMapPinTimeLine className="text-primary" />
                  <span>Precision Tarmac Dispatch</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Synchronizing vehicle delivery with FAA live radar to stage your vehicle on the airport ramp at least 15 minutes before touchdown.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <RiDatabase2Line className="text-primary" />
                  <span>Bespoke Cabin Setup</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Storing your preferred cabin temperature, seating position presets, and requested streaming profiles for recurring journeys.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>3. Telemetry & Geolocation Privacy</span>
            </h2>
            <p>
              Every vehicle in our fleet is equipped with state-of-the-art satellite telemetry to ensure safety, rapid roadside recovery, and authorized territory compliance. Telemetry data is isolated on private encrypted channels and is never provided to marketing networks or third-party brokers. In accordance with California and European privacy regulations, high-frequency historical trip breadcrumbs are automatically purged from our active operational databases 30 days after vehicle return.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>4. Data Retention & Right to Erasure</span>
            </h2>
            <p>
              Executive clients and Sovereign Club members maintain full sovereignty over their records. You may request a complete export of your personal data or file a formal Right to Erasure (deletion) request at any time by contacting our Data Protection Officer at <a href="mailto:privacy@veloce-mobility.com" className="text-primary underline font-mono">privacy@veloce-mobility.com</a>.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>5. Corporate Contact & Compliance Office</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 text-xs space-y-1 font-mono">
              <p className="font-bold text-slate-900 dark:text-white">VELOCE Luxury Mobility Group Inc. — Legal & Privacy Division</p>
              <p>9405 Wilshire Boulevard, Suite 800, Beverly Hills, CA 90212, USA</p>
              <p>Direct Inquiries: privacy@veloce-mobility.com · +1 (800) 555-8356</p>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-obsidian-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <Link to="/terms-and-conditions" className="text-primary hover:underline font-semibold">
              Rental Terms & Conditions →
            </Link>
            <Link to="/security-and-insurance" className="text-primary hover:underline font-semibold">
              Security & Insurance Protocol →
            </Link>
          </div>
          <Link to="/" className="btn-primary text-xs">
            Back to Fleet Reservation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

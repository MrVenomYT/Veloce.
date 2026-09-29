import React from "react";
import { Link } from "react-router-dom";
import { 
  RiShieldStarLine, 
  RiCustomerService2Line, 
  RiLock2Line, 
  RiFileShield2Line, 
  RiArrowLeftLine,
  RiCarWashingLine
} from "react-icons/ri";

const SecurityInsurancePage = () => {
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
            <RiShieldStarLine className="text-sm" />
            <span>Executive Fleet Protection & Risk Protocol</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Security, Fleet Standards & Comprehensive Insurance
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Our multi-layered security architecture provides uncompromised safety, zero-deductible insurance protection, and 24/7 rapid response dispatch across all operating territories.
          </p>
        </div>

        {/* 4 Security Pillars */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-lg">
              <RiFileShield2Line />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              $0 Deductible Collision Coverage (CDW)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every vehicle in the VELOCE fleet is covered with primary collision and comprehensive coverage. In the event of minor scratches, windshield chips, or parking incidents, your personal out-of-pocket deductible is strictly $0.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-lg">
              <RiCustomerService2Line />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              24/7 Worldwide Roadside & Concierge Dispatch
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Instant priority dispatch for flat tires, remote key assistance, towing, or immediate replacement vehicle delivery anywhere in our operating metropolitan regions within 45 minutes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-lg">
              <RiCarWashingLine />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              48-Point Factory Mechanical Certification
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Before every delivery, our master technicians perform a multi-point inspection covering braking systems, Pirelli/Michelin tire tread depth, suspension calibration, fluid levels, and full cabin ozone sanitization.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-lg">
              <RiLock2Line />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Encrypted Telematics & Geo-Fencing Protection
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Real-time encrypted satellite monitoring verifies vehicle integrity and battery status without intruding on passenger privacy. Tamper detection and rapid recovery protocols are active 24/7.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>1. Insurance Underwriting & Liability Limits</span>
            </h2>
            <p>
              VELOCE maintains tier-one commercial automotive fleet insurance underwritten by leading global syndicates. Coverage tiers provided with all standard reservations include:
            </p>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-obsidian-800 pb-1.5">
                <span className="font-semibold text-slate-900 dark:text-white">Third-Party Bodily Injury & Property Damage:</span>
                <span className="font-mono font-bold text-primary">$1,000,000 Combined Single Limit (CSL)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-obsidian-800 pb-1.5">
                <span className="font-semibold text-slate-900 dark:text-white">Physical Damage (Collision & Comprehensive):</span>
                <span className="font-mono font-bold text-primary">Full Replacement Vehicle Value ($0 Deductible)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">Uninsured / Underinsured Motorist Coverage:</span>
                <span className="font-mono font-bold text-primary">$1,000,000 Included</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>2. Executive Chauffeur & Armored Escort Standards</span>
            </h2>
            <p>
              For clients requiring dedicated chauffeur or high-security motorcade services:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>All chauffeurs hold professional executive protection certification and pass annual FBI background verifications.</li>
              <li>Trained in tactical and evasive driving maneuvers with extensive protocol training for private aviation FBO tarmacs and high-profile estates.</li>
              <li>Armored vehicle options (B6/B7 ballistic standards) are available upon request for diplomatic and corporate motorcades with advance notice.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>3. Incident & Claims Reporting Protocol</span>
            </h2>
            <p>
              In the unlikely event of an incident or mechanical irregularity:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>Contact the 24/7 VIP Dispatch hotline immediately at <strong>+1 (800) 555-8356</strong> or via the browser concierge portal.</li>
              <li>Our dispatch team immediately deploys local roadside recovery and arranges an expedited replacement vehicle of equal or superior trim.</li>
              <li>Our dedicated claims concierge handles all insurer paperwork directly with zero administrative burden on the client.</li>
            </ol>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-obsidian-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">
              Privacy Policy →
            </Link>
            <Link to="/terms-and-conditions" className="text-primary hover:underline font-semibold">
              Rental Terms & Conditions →
            </Link>
          </div>
          <Link to="/" className="btn-primary text-xs">
            Return to Fleet Selection
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SecurityInsurancePage;

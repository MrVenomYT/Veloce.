import React from "react";
import { Link } from "react-router-dom";
import { 
  RiFileTextLine, 
  RiKey2Line, 
  RiShieldCheckLine, 
  RiGasStationLine, 
  RiTimeLine, 
  RiArrowLeftLine,
  RiCarLine
} from "react-icons/ri";

const RentalTermsPage = () => {
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
            <RiFileTextLine className="text-sm" />
            <span>VELOCE Master Master Rental Agreement & Operating Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Rental Terms & Operating Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Effective Date: October 1, 2026. These terms govern all reservations, handovers, insurance provisions, and vehicle usage across VELOCE hubs in California, New York, Florida, and London.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base">
              <RiKey2Line />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
              100% Exact VIN Guarantee
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Zero vehicle substitutions. You drive the exact model, trim, and color reserved.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base">
              <RiShieldCheckLine />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
              $0 Deductible Collision
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Comprehensive damage waiver included in all transparent standard daily rates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-750 space-y-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base">
              <RiTimeLine />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">
              Flexible 2-Hour Cancellation
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Modify or cancel flight arrival handovers up to 2 hours prior with zero fees.
            </p>
          </div>
        </div>

        {/* Detailed Terms Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>1. Driver Eligibility & Age Requirements</span>
            </h2>
            <p>
              To maintain the highest security and performance standards for our luxury fleet, all primary and secondary drivers must satisfy the following criteria:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li><strong>Minimum Age:</strong> 21 years of age for Executive Sedans and Performance SUVs (e.g. BMW 7-Series, Range Rover SV). 25 years of age for Exotic Supercars (e.g. Porsche Taycan Turbo S, BMW M8 Competition, AMG GT 63 S).</li>
              <li><strong>Driver’s License:</strong> A valid unexpired United States driver’s license or international driving permit with valid national passport.</li>
              <li><strong>Driving Record:</strong> No major moving violations (including DUI, reckless driving, or excessive speed violations) within the past 36 months.</li>
              <li><strong>Additional Drivers:</strong> Up to two qualified additional drivers may be registered at the time of reservation with zero surcharge.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>2. Delivery, Handover & Tarmac Procedures</span>
            </h2>
            <p>
              VELOCE operates a direct-to-client white-glove dispatch model:
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <p><strong>Private Aviation FBOs:</strong> Vehicles are staged planeside on the tarmac or curbside at designated FBO terminals (Atlantic Aviation, Signature Flight Support, Sheltair, Jet Aviation) with keyless encrypted digital access or in-person fleet concierge handover.</p>
              <p><strong>Residential & Hotel Handover:</strong> Handover is conducted at your five-star hotel valet or private residence with an extensive 48-point digital condition report logged via high-resolution photography.</p>
              <p><strong>Return Protocol:</strong> Simply leave the vehicle at your FBO valet or hotel concierge upon departure; our recovery team handles return inspection without requiring your presence.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>3. Fuel, Electric Charging & Mileage Policy</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <RiGasStationLine className="text-primary" />
                  <span>Fair Fuel / Charge Refill</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Every vehicle is delivered with a 100% full fuel tank or 90%+ battery charge. If returned without full charge, we refill at local pump/utility cost with zero administrative penalty fees.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <RiCarLine className="text-primary" />
                  <span>Generous Daily Mileage</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  All rentals include 150 complimentary miles per 24-hour period (cumulative over multi-day itineraries). Additional mileage is billed at a flat $1.50/mile. Unlimited mileage options available for Sovereign Club.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>4. Prohibited Uses & Territory Restrictions</span>
            </h2>
            <p>
              Vehicles may not be operated on unpaved roads, racetracks (unless accompanied by official VELOCE Track Day supervision), or for commercial ride-hailing services. Fleet vehicles may travel freely between California, Nevada, Arizona, New York, New Jersey, Connecticut, Florida, and Georgia. Cross-border transit into Mexico is strictly prohibited.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>5. Transparent Security Deposit & Payment</span>
            </h2>
            <p>
              A temporary pre-authorization hold ($1,000 to $2,500 depending on vehicle class) is placed on your card at handover and released automatically within 24–48 hours of return inspection. Sovereign Club members enjoy zero security deposit pre-authorizations.
            </p>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-obsidian-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">
              ← Privacy Policy
            </Link>
            <Link to="/security-and-insurance" className="text-primary hover:underline font-semibold">
              Security & Insurance Protocol →
            </Link>
          </div>
          <Link to="/" className="btn-primary text-xs">
            Reserve Vehicle Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RentalTermsPage;

import React, { useState } from "react";
import whiteCar from "../../assets/white-car.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import carBanner from "../../assets/banner-car.png";
import carDark from "../../assets/car.png";
import { 
  RiVipCrownLine, 
  RiRouteLine, 
  RiCheckDoubleFill,
  RiArrowRightLine,
  RiPlaneLine,
  RiCarLine,
  RiCheckboxCircleFill
} from "react-icons/ri";

const routesDatabase = [
  {
    id: "lax-beverly",
    hub: "Los Angeles",
    title: "LAX Private Aviation (Atlantic / Signature) ⇄ Beverly Hills",
    distance: "16 Miles",
    estTime: "28 - 40 Mins",
    popularFleet: "BMW M8 Competition Gran Coupé",
    recommendedCarIndex: 0,
    baseRateMultiplier: 1.0,
  },
  {
    id: "jfk-manhattan",
    hub: "New York",
    title: "JFK Sheltair Aviation ⇄ Manhattan Midtown Penthouse",
    distance: "18 Miles",
    estTime: "35 - 55 Mins",
    popularFleet: "Mercedes-AMG GT 63 S",
    recommendedCarIndex: 2,
    baseRateMultiplier: 1.1,
  },
  {
    id: "mia-southbeach",
    hub: "Miami",
    title: "Opa-Locka Executive Airport (KOPF) ⇄ South Beach & Brickell",
    distance: "22 Miles",
    estTime: "25 - 35 Mins",
    popularFleet: "Porsche Taycan Turbo S",
    recommendedCarIndex: 1,
    baseRateMultiplier: 1.05,
  },
  {
    id: "pch-malibu",
    hub: "California Coast",
    title: "Pacific Coast Highway (PCH) Luxury Scenic Tour · Malibu to Big Sur",
    distance: "290 Miles",
    estTime: "Full Day Scenic",
    popularFleet: "Audi RS e-tron GT Carbon",
    recommendedCarIndex: 4,
    baseRateMultiplier: 1.25,
  },
];

const fleetOptions = [
  { name: "BMW M8 Competition Gran Coupé", price: 320, image: whiteCar, hp: 617 },
  { name: "Porsche Taycan Turbo S", price: 380, image: car2, hp: 750 },
  { name: "Mercedes-AMG GT 63 S", price: 350, image: car3, hp: 630 },
  { name: "Range Rover SV Autobiography", price: 290, image: car1, hp: 523 },
  { name: "Audi RS e-tron GT Carbon", price: 310, image: carBanner, hp: 637 },
  { name: "BMW 760i Executive Lounge", price: 260, image: carDark, hp: 536 },
];

const membershipTiers = [
  {
    name: "Executive Guest",
    subtitle: "Zero Commitment · Pay As You Drive",
    badge: "Direct Web Booking",
    annualFee: "$0",
    feeLabel: "No membership required",
    popular: false,
    benefits: [
      "100% Guaranteed Exact VIN and Trim",
      "Zero-Deductible Full Insurance Included",
      "60-Minute Tarmac & Residence Handover",
      "Complimentary Additional Approved Drivers",
      "24/7 Web & Phone Concierge Assistance",
    ],
    ctaText: "Reserve As Guest",
    ctaLink: "#fleet",
  },
  {
    name: "Sovereign Club",
    subtitle: "For Frequent Private Aviators & Founders",
    badge: "Most Popular",
    annualFee: "$3,800",
    feeLabel: "100% credited toward vehicle rentals",
    popular: true,
    benefits: [
      "All Executive Guest Privileges",
      "Guaranteed Priority Allocation during Peak Events",
      "Complimentary 1-Tier Vehicle Upgrade (subject to availability)",
      "Free Private Aviation Runway Delivery ($75 waived)",
      "Dedicated Senior Fleet Director & Custom Cabin Setup",
      "Zero Cancellation Fees up to 2 Hours Before Handover",
    ],
    ctaText: "Apply for Sovereign Tier",
    ctaLink: "#contact",
  },
  {
    name: "Corporate Fleet Partner",
    subtitle: "Multi-Vehicle Convoys & Executive Leasing",
    badge: "Enterprise & Media",
    annualFee: "Custom",
    feeLabel: "Consolidated monthly corporate billing",
    popular: false,
    benefits: [
      "Multi-Vehicle Motorcades & Armored Transport Options",
      "Uniformed Executive Chauffeurs on Retainer",
      "Direct API & Travel Management System Integration",
      "Unlimited Mileage Packages on Executive Sedans",
      "Nationwide Fleet Staging across LA, NYC, MIA, LON",
      "Custom Brand Asset Placement for Film & Production",
    ],
    ctaText: "Inquire Corporate Fleet",
    ctaLink: "#contact",
  },
];

const AppStoreBanner = () => {
  const [activeTab, setActiveTab] = useState("calculator"); // 'calculator' | 'membership'
  const [selectedRouteId, setSelectedRouteId] = useState("lax-beverly");
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [durationDays, setDurationDays] = useState(2);
  const [withChauffeur, setWithChauffeur] = useState(false);
  const [withCabinBar, setWithCabinBar] = useState(true);
  const [quoteLocked, setQuoteLocked] = useState(false);

  const activeRoute = routesDatabase.find((r) => r.id === selectedRouteId) || routesDatabase[0];
  const activeCar = fleetOptions[selectedCarIndex];

  // Dynamic Rate Calculation
  const discountMultiplier = durationDays >= 7 ? 0.8 : durationDays >= 3 ? 0.9 : 1.0;
  const carDailyPrice = Math.round(activeCar.price * discountMultiplier * activeRoute.baseRateMultiplier);
  const carTotal = carDailyPrice * durationDays;
  const chauffeurTotal = withChauffeur ? 150 * durationDays : 0;
  const cabinBarTotal = withCabinBar ? 45 : 0;
  const grandTotal = carTotal + chauffeurTotal + cabinBarTotal;

  const handleRouteSelect = (route) => {
    setSelectedRouteId(route.id);
    setSelectedCarIndex(route.recommendedCarIndex);
    setQuoteLocked(false);
  };

  return (
    <section id="membership" className="py-20 lg:py-28 bg-slate-900 text-white dark:bg-obsidian-950 transition-colors duration-300 relative overflow-hidden border-t border-slate-800 dark:border-obsidian-800">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider font-mono"
          >
            <RiVipCrownLine className="text-sm" />
            <span>Web-Native Concierge & Membership Engine</span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight"
          >
            Plan Your Itinerary & <span className="luxury-gradient-text">Unlock Sovereign Privileges</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Direct browser-based dispatch with instant route calculation and transparent multi-day tier pricing. Zero app installations, counter delays, or membership lock-ins.
          </p>

          {/* Section View Mode Tabs */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-flex p-1.5 rounded-xl bg-obsidian-900 border border-slate-700 mt-2"
          >
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "calculator"
                  ? "bg-primary text-obsidian-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <RiRouteLine className="text-base" />
              <span>Interactive Itinerary & Rate Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab("membership")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "membership"
                  ? "bg-primary text-obsidian-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <RiVipCrownLine className="text-base" />
              <span>Sovereign Membership Privileges</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Interactive Itinerary & Route Cost Calculator */}
        {activeTab === "calculator" && (
          <div
            data-aos="fade-up"
            className="glass-card bg-obsidian-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8"
          >
            {/* Step 1: Select Hub / Route Preset */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-primary font-mono flex items-center gap-1.5">
                  <RiPlaneLine />
                  <span>1. Select Destination Route / Airport Hub</span>
                </label>
                <span className="text-xs text-slate-400 font-mono">
                  {activeRoute.distance} · {activeRoute.estTime}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {routesDatabase.map((route) => (
                  <button
                    key={route.id}
                    onClick={() => handleRouteSelect(route)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedRouteId === route.id
                        ? "bg-primary/15 border-primary shadow-md shadow-primary/10"
                        : "bg-white/5 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold text-primary">
                        {route.hub}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {route.distance}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-white line-clamp-2 leading-snug">
                      {route.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 & 3: Fleet Vehicle Selection & Add-ons */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 border-t border-slate-800">
              
              {/* Vehicle Options Grid (Left 7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-primary font-mono flex items-center gap-1.5">
                  <RiCarLine />
                  <span>2. Choose Vehicle from Available Hub Fleet</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {fleetOptions.map((car, idx) => (
                    <div
                      key={car.name}
                      onClick={() => {
                        setSelectedCarIndex(idx);
                        setQuoteLocked(false);
                      }}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        selectedCarIndex === idx
                          ? "bg-primary/20 border-primary ring-1 ring-primary shadow-lg"
                          : "bg-white/5 border-slate-700 hover:border-slate-500"
                      }`}
                    >
                      <div className="h-16 flex items-center justify-center p-1">
                        <img
                          src={car.image}
                          alt={car.name}
                          referrerPolicy="no-referrer"
                          className="max-h-full object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                      <div className="pt-2 border-t border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-white line-clamp-1">
                          {car.name}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                          <span>{car.hp} HP</span>
                          <span className="text-primary font-bold">${car.price}/day</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duration Slider */}
                <div className="p-4 rounded-xl bg-white/5 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-200">
                      Rental Duration: <span className="font-mono text-primary font-bold">{durationDays} {durationDays === 1 ? "Day" : "Days"}</span>
                    </span>
                    {durationDays >= 7 ? (
                      <span className="text-emerald-400 font-bold font-mono text-[11px]">-20% Weekly Discount</span>
                    ) : durationDays >= 3 ? (
                      <span className="text-emerald-400 font-bold font-mono text-[11px]">-10% Multi-Day Discount</span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">Standard Daily Rate</span>
                    )}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={durationDays}
                    onChange={(e) => setDurationDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>1 Day</span>
                    <span>3 Days (-10%)</span>
                    <span>7 Days (-20%)</span>
                    <span>14 Days</span>
                  </div>
                </div>

                {/* Concierge Add-ons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-slate-800 cursor-pointer hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <input
                        type="checkbox"
                        checked={withChauffeur}
                        onChange={(e) => setWithChauffeur(e.target.checked)}
                        className="accent-primary"
                      />
                      <span>Uniformed VIP Chauffeur</span>
                    </div>
                    <span className="text-[11px] font-mono text-primary font-bold">+$150/day</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-slate-800 cursor-pointer hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <input
                        type="checkbox"
                        checked={withCabinBar}
                        onChange={(e) => setWithCabinBar(e.target.checked)}
                        className="accent-primary"
                      />
                      <span>Chilled Artisan Refreshments</span>
                    </div>
                    <span className="text-[11px] font-mono text-primary font-bold">+$45 flat</span>
                  </label>
                </div>
              </div>

              {/* Live Quotation Summary Card (Right 5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-obsidian-850 to-obsidian-950 p-6 sm:p-7 rounded-2xl border border-primary/40 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-primary font-bold tracking-wider">
                      Instant Web Quotation
                    </div>
                    <h3 className="text-base font-bold font-display text-white">
                      {activeCar.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                    Live Web Rate
                  </span>
                </div>

                {/* Vehicle Visual */}
                <div className="h-28 bg-black/40 rounded-xl p-2 flex items-center justify-center relative overflow-hidden border border-slate-800">
                  <img
                    src={activeCar.image}
                    alt={activeCar.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300">
                    {activeRoute.hub} Hub
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Daily Rate ({durationDays} days @ ${carDailyPrice}/day):</span>
                    <span className="font-mono tabular-nums font-semibold">${carTotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tarmac / Curbside Handover:</span>
                    <span className="font-mono text-emerald-400 font-bold">$0 Complimentary</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Zero-Deductible Full Insurance:</span>
                    <span className="font-mono text-emerald-400 font-bold">$0 Included</span>
                  </div>
                  {withChauffeur && (
                    <div className="flex justify-between">
                      <span>Executive Chauffeur ({durationDays} days):</span>
                      <span className="font-mono tabular-nums font-semibold">${chauffeurTotal}</span>
                    </div>
                  )}
                  {withCabinBar && (
                    <div className="flex justify-between">
                      <span>Cabin Bar Preparation:</span>
                      <span className="font-mono tabular-nums font-semibold">${cabinBarTotal}</span>
                    </div>
                  )}
                  
                  {/* Total Line */}
                  <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-bold text-white block">Estimated Total:</span>
                      <span className="text-[10px] text-slate-400">All local taxes & fees included</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">
                      ${grandTotal}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                {!quoteLocked ? (
                  <button
                    onClick={() => setQuoteLocked(true)}
                    className="w-full btn-primary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Lock Itinerary & Rate Quote</span>
                    <RiArrowRightLine />
                  </button>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-center space-y-2">
                    <p className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <RiCheckboxCircleFill className="text-base" />
                      <span>Rate Locked: Reference VEL-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </p>
                    <a
                      href="#fleet"
                      className="block btn-primary py-2 text-xs font-bold uppercase tracking-wider text-center"
                    >
                      Proceed to Final Booking Details
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Sovereign Membership Tiers & Privileges */}
        {activeTab === "membership" && (
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-2 border-primary shadow-2xl shadow-primary/10 -translate-y-2"
                    : "bg-obsidian-900/80 border border-slate-700"
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-obsidian-950 text-[10px] font-mono font-extrabold uppercase px-3.5 py-1 rounded-full shadow-md">
                    Recommended for Aviators & Executives
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mt-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-3 border-y border-slate-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold font-mono text-white tabular-nums">
                        {tier.annualFee}
                      </span>
                      {tier.annualFee !== "$0" && tier.annualFee !== "Custom" && (
                        <span className="text-xs text-slate-400">/ year</span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {tier.feeLabel}
                    </span>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <RiCheckDoubleFill className="text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tier.ctaLink}
                  className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all ${
                    tier.popular
                      ? "btn-primary"
                      : "btn-secondary border-slate-700 hover:border-slate-500"
                  }`}
                >
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AppStoreBanner;

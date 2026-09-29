import React from "react";
import { 
  HiOutlineKey, 
  HiOutlineShieldCheck, 
  HiOutlineCurrencyDollar, 
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineUserGroup
} from "react-icons/hi";

const servicePillars = [
  {
    icon: <HiOutlineKey className="text-3xl text-primary" />,
    title: "100% Guaranteed Exact Model",
    description: "Never arrive to generic substitutions. The specific VIN, trim, and bespoke interior you reserve is locked exclusively to your itinerary.",
    metric: "Zero Substitutions",
    aosDelay: "0",
  },
  {
    icon: <HiOutlineClock className="text-3xl text-primary" />,
    title: "60-Minute Tarmac Handover",
    description: "Direct curbside handoff at private aviation FBOs, executive heliports, or five-star hotel valets with keyless digital access.",
    metric: "< 60 Min Dispatch",
    aosDelay: "150",
  },
  {
    icon: <HiOutlineShieldCheck className="text-3xl text-primary" />,
    title: "Zero-Deductible Full Coverage",
    description: "Every journey includes comprehensive collision waiver, roadside assistance dispatch, and complimentary additional approved drivers.",
    metric: "$0 Deductible Inc.",
    aosDelay: "300",
  },
  {
    icon: <HiOutlineCurrencyDollar className="text-3xl text-primary" />,
    title: "Transparent Flat-Rate Billing",
    description: "Zero surprise airport concession fees, counter paperwork delays, or mandatory upsells. What you see is exactly what you pay.",
    metric: "100% Transparent",
    aosDelay: "0",
  },
  {
    icon: <HiOutlineSparkles className="text-3xl text-primary" />,
    title: "Bespoke Cabin Preparation",
    description: "Custom pre-set climate, mobile phone pairing, preferred streaming audio, and chilled artisan refreshments upon request.",
    metric: "Personalized Setup",
    aosDelay: "150",
  },
  {
    icon: <HiOutlineUserGroup className="text-3xl text-primary" />,
    title: "Dedicated VIP Fleet Concierge",
    description: "Your single point of contact for route modifications, vehicle swaps, executive chauffeur dispatch, and multi-city itineraries.",
    metric: "24/7 Dedicated Agent",
    aosDelay: "300",
  },
];

const Services = () => {
  return (
    <section id="advantages" className="py-20 bg-white dark:bg-obsidian-900 transition-colors duration-300">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div
            data-aos="fade-up"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-mono"
          >
            The VELOCE Standard
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            Why Executives & Connoisseurs Choose VELOCE
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm sm:text-base text-slate-600 dark:text-slate-300"
          >
            We eliminate the friction, bureaucracy, and disappointment of legacy car rental agencies with our high-touch executive service model.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.title}
              data-aos="fade-up"
              data-aos-delay={pillar.aosDelay}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:text-obsidian-950 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-primary px-2.5 py-1 rounded bg-primary/10">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-obsidian-800 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors flex items-center gap-1">
                <span>Included in every reservation</span>
                <span className="font-mono">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

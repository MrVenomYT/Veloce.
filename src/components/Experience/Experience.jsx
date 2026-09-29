import React from "react";
import { RiAwardLine, RiShieldStarLine, RiCustomerService2Line, RiCarWashingLine } from "react-icons/ri";

const metrics = [
  {
    icon: <RiCarWashingLine className="text-2xl text-primary" />,
    value: "14,500+",
    label: "Completed VIP Journeys",
    detail: "Seamless airport tarmac & residential handovers since 2018.",
  },
  {
    icon: <RiShieldStarLine className="text-2xl text-primary" />,
    value: "100%",
    label: "Guaranteed Model Match",
    detail: "Zero vehicle substitutions across our entire fleet operation.",
  },
  {
    icon: <RiCustomerService2Line className="text-2xl text-primary" />,
    value: "14 min",
    label: "Average Concierge Response",
    detail: "Real-time itinerary updates and dedicated VIP fleet directors.",
  },
  {
    icon: <RiAwardLine className="text-2xl text-primary" />,
    value: "4.98 / 5.0",
    label: "Executive Satisfaction",
    detail: "Rated #1 luxury mobility provider by leading family offices.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-slate-900 text-white dark:bg-obsidian-950 border-y border-obsidian-800">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">
                  {item.value}
                </span>
              </div>
              <h3 className="text-sm font-bold font-display text-white">
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
